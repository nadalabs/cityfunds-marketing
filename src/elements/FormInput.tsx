'use client';
import { useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { ErrorText } from '@elements/Typography';

interface FormInputProps {
  name: string;
  rules?: any;
  type?: string;
  placeholder?: string;
  value?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  name,
  rules,
  type = 'text',
  placeholder,
  value,
}) => {
  const { control, setValue, trigger } = useFormContext();

  useEffect(() => {
    if (value) setValue(name, value);
  }, [name, value, setValue]);

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={''}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div style={{ flexGrow: 1 }}>
          <StyledInput
            id={name}
            value={value}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={() => trigger(name)}
          />
          {error && <ErrorText>{error.message}</ErrorText>}
        </div>
      )}
    />
  );
};

const StyledInput = styled.input`
  height: 3rem;
  color: black;
  background-color: transparent;
  font-family: ${({ theme }) => theme.fonts.main};
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 0.375rem 0.375rem 0.375rem 1rem;
  border: none;
  border-radius: 0.625rem;

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
    outline: none;
  }
`;

export const StyledForm = styled.form`
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: space-between;
  background-color: rgba(152, 152, 152, 0.15);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid #e7e7e7;
  box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
  padding: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    border: none;
    box-shadow: none;
    padding: 0;
  }
`;
