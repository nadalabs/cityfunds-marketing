import { PrimaryButton } from '@elements/Buttons';
import { FormInput, StyledForm } from '@elements/FormInput';
import { Caption, ErrorText } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { LEGAL_LINKS, UTM_PARAMETERS } from '@utils/constants';
import { getCookie, setCookie } from '@utils/helpers';
import Link from 'next/link';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { styled } from 'styled-components';

interface EmailCaptureProps {
  btnText: string;
  onClick: () => void;
  formName: string;
}

export default function EmailCapture({
  btnText,
  onClick,
  formName,
}: EmailCaptureProps) {
  const isMobile = useIsMobile();
  const methods = useForm<FieldValues>({
    defaultValues: {
      email: '',
    },
    mode: 'onBlur',
  });
  const { handleSubmit, formState, setError } = methods;

  const onSubmit = async (inputs: FieldValues) => {
    try {
      let payload: any = { ...inputs };
      for (let param of UTM_PARAMETERS) {
        const value = getCookie(param);
        if (value) payload[param] = value;
      }
      console.log(payload);
      await window.analytics.identify(payload);
      await window.analytics.track(formName, payload);
      setCookie('email', inputs.email);
      onClick();
    } catch (err: any) {
      setError('email', {
        message: err.response.data.errors.message,
      });
    }
  };

  return (
    <FormProvider {...methods}>
      <StyledForm
        onSubmit={handleSubmit(onSubmit)}
        style={{ flexDirection: isMobile ? 'column' : 'row' }}
      >
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

          {!isMobile && (
            <BtnWrapper>
              <PrimaryButton>{btnText}</PrimaryButton>
            </BtnWrapper>
          )}
        </FormWrapper>

        {isMobile && (
          <BtnWrapper>
            <PrimaryButton>{btnText}</PrimaryButton>
          </BtnWrapper>
        )}
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

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const BtnWrapper = styled.div`
  width: 230px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;
