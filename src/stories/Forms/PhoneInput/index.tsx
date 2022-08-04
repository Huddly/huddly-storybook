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
import { Select, Option, Input, Flex } from '../../../';

const StyledSelect = styled(Select)`
  width: calc(var(--spacing-40) * 3);
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
  /**
   * Whether to use the users IP to determine the region code. Defaults to false.
   * Use this with caution as it may not be GDPR compliant and/or licensed.
   */
  geoLocate?: boolean;
}

/**
 * PhoneInput component
 */
export const PhoneInput = React.forwardRef(
  (props: PhoneInputProps, ref: React.RefObject<HTMLInputElement>) => {
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
      // We also want to trigger an update to the phone number input when the country code changes, so the formatting updates.
      const cleanedPhoneNumber = phoneNumber.replace(/\D/g, ''); // remove all non-numeric characters
      const newPhoneNumber = getAsYouType(regionCode).reset(cleanedPhoneNumber); // format the phone number
      setPhoneNumber(newPhoneNumber);
    };

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      const cleanedValue = e.target.value.replace(/\D/g, ''); // remove all non-numeric characters
      const phoneNumber = getAsYouType(regionCode).reset(cleanedValue); // format the phone number
      setPhoneNumber(phoneNumber);
    };

    useEffect(function handleInitialRegionCode(): void {
      if (regionCode) return;
      if (geoLocate) {
        geoLocateRegionCode().then((r) => setRegionCode(r));
      } else {
        const firstCountryCode = Number(countryCodes[0]);
        setRegionCode(getRegionCodeForCountryCode(firstCountryCode));
      }
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
        if (!onChange) return;
        const pn = parsePhoneNumber(phoneNumber, regionCode);
        const json = pn.toJSON();
        const value = pn.getNumber();
        onChange({
          target: { ...json, id, name: inputName, value },
        } as React.ChangeEvent<HTMLInputElement>);
      },
      [regionCode, phoneNumber]
    );

    return (
      <Flex className={className} columnGap={8}>
        <StyledSelect
          aria-labelledby={ariaDescribedBy}
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
            <Option key={countryCode} value={countryCode}>
              +{countryCode}
            </Option>
          ))}
        </StyledSelect>

        <Input
          aria-labelledby={ariaDescribedBy}
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
      </Flex>
    );
  }
);
