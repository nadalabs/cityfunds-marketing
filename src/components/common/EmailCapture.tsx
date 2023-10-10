import { PrimaryButton } from '@elements/Buttons';
import { SectionWrapper } from '@elements/Containers';
import { FormInput, StyledForm } from '@elements/FormInput';
import {
  Caption,
  ErrorText,
  Overline,
  PrimaryText,
  SmallHeading,
} from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { LEGAL_LINKS, UTM_PARAMETERS } from '@utils/constants';
import { getCookie, setCookie } from '@utils/helpers';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { styled } from 'styled-components';

interface EmailCaptureProps {
  formName: string;
  isPopup?: boolean;
}

export default function EmailCapture({ formName, isPopup }: EmailCaptureProps) {
  const isMobile = useIsMobile();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCanceled, setIsCanceled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const methods = useForm<FieldValues>({
    defaultValues: {
      email: '',
    },
    mode: 'onBlur',
  });
  const { handleSubmit, formState, setError } = methods;

  useEffect(() => {
    const checkVisibility = () => {
      if (!isCanceled && window.scrollY > window.innerHeight * 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', checkVisibility);
    return () => window.removeEventListener('scroll', checkVisibility);
  }, [isCanceled]);

  const onSubmit = async (inputs: FieldValues) => {
    try {
      let payload: any = { ...inputs };
      for (let param of UTM_PARAMETERS) {
        const value = getCookie(param);
        if (value) payload[param] = value;
      }
      await window.analytics.identify(payload);
      await window.analytics.track(formName, payload);
      setCookie('email', inputs.email);
      setIsSubmitted(true);
      setInterval(() => {
        setIsCanceled(true);
        setIsVisible(false);
      }, 3000);
    } catch (err: any) {
      setError('email', {
        message: err.response.data.errors.message,
      });
    }
  };

  function renderContent() {
    if (isSubmitted) {
      return (
        <PrimaryText style={{ textAlign: 'center', color: '#48DC95' }}>
          You are now subscribed!
        </PrimaryText>
      );
    }

    return (
      <>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ marginBottom: '1.5rem' }}>
            <Overline>Be the first to know about new Cityfunds</Overline>
            <SmallHeading>Sign Up for Updates</SmallHeading>
          </div>

          {isPopup && (
            <Image
              width={16}
              height={16}
              alt={'Nada'}
              src={'/icons/cancel.svg'}
              style={{ cursor: 'pointer' }}
              onClick={() => {
                setIsCanceled(true);
                setIsVisible(false);
              }}
            />
          )}
        </div>

        <div style={{ width: '100%' }}>
          <FormProvider {...methods}>
            <StyledForm
              style={{ flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 0 : '0.5rem' }}
              onSubmit={handleSubmit(onSubmit)}
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

              </FormWrapper>

                <BtnWrapper>
                  <PrimaryButton type="submit">Subscribe</PrimaryButton>
                </BtnWrapper>
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
        </div>
      </>
    );
  }

  if (isPopup) {
    return (
      <StickyWrapper
        style={{
          opacity: isVisible ? '1' : '0',
          zIndex: isVisible ? '999' : '-999',
        }}
      >
        {renderContent()}
      </StickyWrapper>
    );
  }

  return (
    <SectionWrapper>
      <ContentWrapper>{renderContent()}</ContentWrapper>
    </SectionWrapper>
  );
}

const StickyWrapper = styled.div`
  position: sticky;
  left: 6.5rem;
  bottom: 2rem;
  width: 40%;
  border-radius: 1.5rem;
  padding: 2rem;
  background-color: white;
  box-shadow: 2px 4px 25px 0px rgba(0, 0, 0, 0.1);
  transition: opacity 0.5s ease-in-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    bottom: 0;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 2px 4px 25px 0px rgba(0, 0, 0, 0.1);
  border-radius: 3.5rem;
  padding: 3.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    box-shadow: none;
    padding: 0;
  }
`;

const FormWrapper = styled.div`
  width: inherit;
  display: flex;
  align-items: center;
  justify-items: space-between;
  background-color: rgba(152, 152, 152, 0.15);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
  }
`;

const BtnWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;
