import { ErrorText } from '@elements/Typography';
import { useEffect, useRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import InputMask from 'react-input-mask';
import styled from 'styled-components';

interface FormInputProps {
  name: string;
  rules?: any;
  type?: string;
  placeholder?: string;
  value?: string;
  mask?: any;
}

export const FormInput: React.FC<FormInputProps> = ({
  name,
  rules,
  type = 'text',
  placeholder,
  value,
  mask,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { trigger, control, setValue } = useFormContext();
  const handleBlur = async () => {
    await trigger(name);
  };

  useEffect(() => {
    if (value) setValue(name, value);
  }, [name, value, setValue]);

  const maskChar = '*';
  const unmaskValue = (value: string) => {
    if (mask) {
      let unmaskedValue = '';
      for (let i = 0; i < value.length; i++) {
        const isValueChar =
          mask[i] === '9' || mask[i] === 'a' || mask[i] === '*';
        const isMaskChar = value[i] === maskChar;
        if (isValueChar && !isMaskChar) unmaskedValue += value[i];
      }
      return unmaskedValue;
    }
    return value;
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={''}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <InputMask
            id={name}
            value={value}
            onChange={(e: any) => {
              const currentValue = e.target.value;
              const unmask = unmaskValue(currentValue);
              onChange(unmask);
            }}
            type={type}
            placeholder={placeholder}
            onBlur={() => handleBlur()}
            mask={mask}
          >
            <StyledInput
              ref={inputRef}
              id={name}
              value={value}
              type={type}
              placeholder={placeholder}
            />
          </InputMask>
          {error && <ErrorText>{error.message}</ErrorText>}
        </>
      )}
    />
  );
};

const StyledInput = styled.input`
  font-family: ${({ theme }) => theme.fonts.main};
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 1rem;
  color: #989898;
  height: 56px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
    outline: none;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid #e7e7e7;
  box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  /* max-width: 400px; */
  width: 100%;
  text-align: center;
  padding: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    border: none;
    box-shadow: none;
    padding: 0;
  }
`;
