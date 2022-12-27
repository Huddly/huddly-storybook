import React, { useState, useEffect, useMemo } from 'react';
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
import { Select } from '../Select/Select';
import { Option } from '../Select/Option';
import { Input } from '../Input';
import { Flex } from '../../Foundation/Flex';

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
    const res = await fetch('https://ipapi.co/country/');
    return await res.text();
  } catch (error) {
    console.error(error);
  }
};

const sanitizeAndFormatPhoneNumber = (value: string, regionCode: string): string => {
  value = value.replace(/\D/g, ''); // remove all non-numeric characters
  value = getAsYouType(regionCode).reset(value); // format the phone number
  return value;
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
 *
 * For context:
 * Country code is the international dialing code, e.g. +47 for Norway.
 * Region code is the ISO 3166-1 alpha-2 code, e.g. NO for Norway.
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
    const countryCodes = useMemo(() => {
      return getSupportedCallingCodes().filter((cc) =>
        isNaN(Number(getRegionCodeForCountryCode(Number(cc))))
      ); // Filter to remove toll-free, premium numbers etc...
    }, []);
    const splitValue = getSplitValue(value);

    const [regionCode, setRegionCode] = useState<string>(splitValue?.regionCode || '');
    const [phoneNumber, setPhoneNumber] = useState<string>(splitValue?.phoneNumber || '');
    const [placeholder, setPlaceholder] = useState<string>('');

    const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
      const countryCode = Number(e.target.value);
      const regionCode = getRegionCodeForCountryCode(countryCode);
      setRegionCode(regionCode);
      // We also want to trigger an update to the phone number input when the country code changes, so the formatting updates.
      const newPhoneNumber = sanitizeAndFormatPhoneNumber(phoneNumber, regionCode);
      setPhoneNumber(newPhoneNumber);
    };

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      let value = e.target.value;
      if (value === undefined) return;
      let _regionCode = regionCode;

      const parsedValue = parsePhoneNumber(value, regionCode);
      if (parsedValue.isValid()) {
        value = parsedValue.getNumber('national');
        _regionCode = parsedValue.getRegionCode();
        setRegionCode(_regionCode);
      }
      const phoneNumber = sanitizeAndFormatPhoneNumber(value, _regionCode);
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
        if (
          !regionCode ||
          isNaN(Number(phoneNumber)) ||
          getCountryCodeForRegionCode(regionCode) === 0
        ) {
          return;
        }
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
      <Flex className={className} columnGap='8'>
        <StyledSelect
          aria-errormessage={ariaErrorMessage}
          aria-invalid={hasError}
          aria-labelledby={ariaDescribedBy}
          hasError={hasError}
          id={`${id}-country-code`}
          name={`${inputName}-country-code`}
          onChange={handleCountryCodeChange}
          placeholder='+00'
          required={isRequired}
          value={getCountryCodeForRegionCode(regionCode).toString()}
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
