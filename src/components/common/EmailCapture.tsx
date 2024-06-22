'use client';
import { PrimaryButton } from '@elements/Buttons';
import { SectionWrapper, StackWrapper } from '@elements/Containers';
import { FormInput, StyledForm } from '@elements/FormInput';
import { Caption, PrimaryText, SmallHeading } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import {
  LEGAL_LINKS,
  LIFECYCLE_STAGES,
  UTM_PARAMETERS,
} from '@utils/constants';
import { getCookie, setCookie } from '@utils/helpers';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { styled } from 'styled-components';

interface EmailCaptureProps {
  isPopup?: boolean;
  isHero?: boolean;
  isLanding?: boolean;
}

export default function EmailCapture({
  isPopup,
  isHero,
  isLanding,
}: EmailCaptureProps) {
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
  const { handleSubmit, setError } = methods;

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
      let payload: any = {
        ...inputs,
        lifecycle_stage: LIFECYCLE_STAGES.LEAD,
      };
      for (let param of UTM_PARAMETERS) {
        const value = getCookie(param);
        if (value) payload[param] = value;
      }
      await window.analytics.identify(payload);
      await window.analytics.track('Lead Captured', {
        product: 'Cityfunds',
      });
      setCookie('email', inputs.email);

      if (isHero || isLanding) {
        window.location.replace(
          `${process.env.NEXT_PUBLIC_WEB_APP_URL}/signup`
        );
      } else {
        setIsSubmitted(true);
        setInterval(() => {
          setIsCanceled(true);
          setIsVisible(false);
        }, 3000);
      }
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
          <StackWrapper style={{ marginBottom: '1.5rem', gap: 0 }}>
            <SmallHeading>
              {isLanding
                ? 'Own Home Equity In Top Cities'
                : 'Sign Up for Updates'}
            </SmallHeading>
            <PrimaryText>
              {isLanding
                ? 'Unlock real wealth through diversified home equity portfolios.'
                : 'Be the first to know about new Cityfunds'}
            </PrimaryText>
          </StackWrapper>

          {isPopup && (
            <Image
              width={16}
              height={16}
              alt={'Close'}
              src={'/icons/cancel.svg'}
              style={{ alignSelf: 'flex-start', cursor: 'pointer' }}
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
              style={{
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: isMobile ? 'center' : 'flex-start',
              }}
              onSubmit={handleSubmit(onSubmit)}
            >
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
              <PrimaryButton type="submit">
                {isLanding ? 'Get Stared' : 'Subscribe'}
              </PrimaryButton>
            </StyledForm>
            {!isLanding && (
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
            )}
          </FormProvider>
        </div>
      </>
    );
  }

  if (isPopup) {
    return (
      <StickyWrapper
        style={{
          left: isMobile ? 0 : '6.5rem',
          opacity: isVisible ? '1' : '0',
          zIndex: isVisible ? '999' : '-999',
        }}
      >
        {renderContent()}
      </StickyWrapper>
    );
  }

  if (isHero) {
    return (
      <div style={{ width: '100%' }}>
        <FormProvider {...methods}>
          <StyledForm
            style={{
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: isMobile ? 'center' : 'flex-start',
            }}
            onSubmit={handleSubmit(onSubmit)}
          >
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
            <PrimaryButton type="submit">Get Started</PrimaryButton>
          </StyledForm>
        </FormProvider>
      </div>
    );
  }

  return (
    <SectionWrapper>
      <ContentWrapper>{renderContent()}</ContentWrapper>
    </SectionWrapper>
  );
}

const StickyWrapper = styled.div`
  position: fixed;
  bottom: 2rem;
  width: 40%;
  padding: 2rem;
  background-color: white;
  border-radius: 2rem;
  box-shadow: 1.5px 1.5px 25px 0px rgba(0, 0, 0, 0.05);
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
  border-radius: 2rem;
  box-shadow: 1.5px 1.5px 25px 0px rgba(0, 0, 0, 0.05);
  padding: 3.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    box-shadow: none;
    padding: 0;
  }
`;
