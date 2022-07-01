import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  parsePhoneNumber,
  getSupportedCallingCodes,
  getRegionCodeForCountryCode,
  getCountryCodeForRegionCode,
  getAsYouType,
  getExample,
} from 'awesome-phonenumber';
import { GlobalInputProps } from '../../../shared/types';
import { Select, Input, Flex } from '../../../';

interface WrapperProps {
  hasError?: boolean;
}

const Wrapper = styled(Flex)<WrapperProps>`
  select {
    width: calc(var(--spacing-48) * 2);
  }
`;

/**
 * Splits a phone number into an object.
 *
 * @param value A phone number in string value.
 * @returns Phone number split into an object consisting of a region code and a phone number.
 */
const getSplitValue = (value = ''): { regionCode?: string; phoneNumber?: string } => {
  const pn = parsePhoneNumber(value);
  const { number, regionCode } = pn.toJSON();
  return { regionCode, phoneNumber: number?.national };
};

/**
 * Get a region code from a users IP.
 *
 * @returns A region code.
 */
const geoLocateRegionCode = async (): Promise<string> => {
  try {
    const res = await fetch('http://ip-api.com/json');
    const { countryCode } = await res.json();
    return countryCode;
  } catch (error) {
    console.error(error);
  }
};

export interface PhoneInputProps extends GlobalInputProps {
  geoLocate?: boolean;
}

/**
 * PhoneInput component
 */
export const PhoneInput = React.forwardRef((props: PhoneInputProps, ref: React.RefObject<HTMLInputElement>) => {
  const {
    ariaDescribedBy,
    ariaErrorMessage,
    className,
    geoLocate = false,
    hasError,
    id,
    isRequired,
    name,
    onChange,
    value,
    ...additionalPhoneInputProps
  } = props;

  const inputName = name || id;
  const countryCodes = getSupportedCallingCodes().filter((cc) =>
    isNaN(Number(getRegionCodeForCountryCode(Number(cc))))
  ); // Filter to remove toll-free, premium numbers etc...
  const splitValue = getSplitValue(value);

  const [regionCode, setRegionCode] = useState<string>(splitValue?.regionCode || '');
  const [phoneNumber, setPhoneNumber] = useState<string>(splitValue?.phoneNumber || '');
  const [placeholder, setPlaceholder] = useState<string>('');

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const countryCode = Number(e.target.value);
    const regionCode = getRegionCodeForCountryCode(countryCode);
    setRegionCode(regionCode);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const cleanedValue = e.target.value.replace(/\D/g, ''); // remove all non-numeric characters
    const phoneNumber = getAsYouType(regionCode).reset(cleanedValue); // format the phone number
    setPhoneNumber(phoneNumber);
  };

  useEffect(function handleGeoLocate(): void {
    if (regionCode || !geoLocate) return;
    geoLocateRegionCode().then((r) => setRegionCode(r));
  }, []);

  useEffect(
    function handlePlaceholder(): void {
      if (!regionCode || isNaN(Number(phoneNumber))) return;
      const example = getExample(regionCode).toJSON().number.national;
      setPlaceholder(example);
    },
    [regionCode]
  );

  useEffect(
    function handleOnChange(): void {
      if (typeof onChange !== 'function') return;
      const pn = parsePhoneNumber(phoneNumber, regionCode);
      const json = pn.toJSON();
      const value = pn.getNumber();
      onChange({ target: { ...json, id, name: inputName, value } });
    },
    [regionCode, phoneNumber]
  );

  return (
    <Wrapper className={className} hasError={hasError} columnGap={8}>
      <Select
        aria-describedby={ariaDescribedBy}
        aria-errormessage={ariaErrorMessage}
        aria-invalid={hasError}
        hasError={hasError}
        id={`${id}-country-code`}
        name={`${inputName}-country-code`}
        onChange={handleCountryCodeChange}
        required={isRequired}
        value={getCountryCodeForRegionCode(regionCode)}
      >
        {countryCodes.map((countryCode) => (
          <option key={countryCode} value={countryCode}>
            +{countryCode}
          </option>
        ))}
      </Select>

      <Input
        aria-describedby={ariaDescribedBy}
        aria-errormessage={ariaErrorMessage}
        aria-invalid={hasError}
        hasError={hasError}
        id={id}
        name={inputName}
        onChange={handlePhoneNumberChange}
        placeholder={placeholder}
        ref={ref}
        required={isRequired}
        type='text'
        value={phoneNumber}
        {...additionalPhoneInputProps}
      />
    </Wrapper>
  );
});
