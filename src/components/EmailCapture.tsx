import { PrimaryButton } from '@elements/Buttons';
import { FormInput, StyledForm } from '@elements/FormInput';
import { Caption, ErrorText } from '@elements/Typography';
import { LEGAL_LINKS } from '@utils/constants';
import Link from 'next/link';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { styled } from 'styled-components';

export default function EmailCapture({}) {
  const methods = useForm<FieldValues>({
    defaultValues: {
      email: '',
    },
    mode: 'onBlur',
  });
  const { handleSubmit, formState, setError } = methods;

  const onSubmit = async (inputs: FieldValues) => {
    try {
      await window.analytics.track('Lead Capture', {
        formName: 'Cityfunds',
        email: inputs.email,
      });
    } catch (err: any) {
      setError('email', {
        message: err.response.data.errors.message,
      });
    }
  };

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormWrapper>
          <FormInput
            name="email"
            rules={{
              required: 'Email address is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              },
            }}
            type="email"
            placeholder="Enter Your Email"
          />
          <div style={{ width: '350px' }}>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </FormWrapper>
      </StyledForm>

      {formState?.errors?.root?.message && (
        <ErrorText>{formState?.errors?.root?.message}</ErrorText>
      )}
      <Caption>
        By subscribing you agree with our{' '}
        <Link
          href={LEGAL_LINKS[1].link}
          style={{ color: '#48DC95', cursor: 'pointer' }}
        >
          Privacy Policy
        </Link>{' '}
        and provide consent to receiving updates from our company.
      </Caption>
    </FormProvider>
  );
}

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: space-between;
  background-color: rgba(152, 152, 152, 0.15);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  margin-bottom: 1rem;
`;
