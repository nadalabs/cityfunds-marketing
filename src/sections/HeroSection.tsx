import { FormInput, StyledForm } from '@elements/FormInput';
import {
  Caption,
  GreenSquare,
  Heading,
  PrimaryText,
  Text,
} from '@elements/Typography';
import { EXTERNAL_ROUTES } from '@utils/constants';
import { isMobileDevice } from '@utils/helpers';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import styled from 'styled-components';

export default function HeroSection({}) {
  const [active, setActive] = useState(0);
  const isMobile = isMobileDevice();

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((active + 1) % CITIES.length);
    }, 5000);

    return () => clearInterval(interval);
  });

  const CITIES = [
    { name: 'Dallas', imageUrl: '/images/dallas-hero.png', numProperties: 10 },
    { name: 'Austin', imageUrl: '/images/austin-hero.png', numProperties: 10 },
    { name: 'Miami', imageUrl: '/images/miami-hero.png', numProperties: 10 },
    { name: 'Tampa', imageUrl: '/images/tampa-hero.png', numProperties: 10 },
  ];

  const methods = useForm<FieldValues>({
    defaultValues: {
      email: '',
    },
    mode: 'onBlur',
  });
  const { handleSubmit, formState, setError } = methods;

  const onSubmit = async (inputs: FieldValues) => {
    try {
      // await window.analytics.track('Signup Started');
    } catch (err: any) {
      setError('email', {
        message: err.response.data.errors.message,
      });
    }
  };

  return (
    <HeroImage
      style={{
        backgroundImage: `linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 22.38%,
      rgba(0, 0, 0, 0.32) 44.79%,
      rgba(0, 0, 0, 0.87) 73.73%
    ),
    url(${CITIES[active].imageUrl})`,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <Image
            width={125}
            height={30}
            alt={'Cityfunds'}
            src={'/images/cityfunds.png'}
          />
          <hr
            style={{
              width: '1px',
              height: '30px',
              display: 'inline-block',
              margin: '0 24px',
            }}
          />
          <Image
            width={125}
            height={30}
            alt={'Altsco'}
            src={'/images/altsco.png'}
          />
        </div>
        {/* {!isMobile && (
          <PrimaryButton
            onClick={() => window.location.replace(EXTERNAL_ROUTES.WEB_APP)}
          >
            Get Started
          </PrimaryButton>
        )} */}
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <ContentWrapper>
          <FormProvider {...methods}>
            <Heading style={{ color: 'white' }}>
              Own a Piece of Your Favorite City
            </Heading>
            <PrimaryText style={{ color: '#B0B0B0' }}>
              Diversified real estate portfolios with passive income in the
              nation's top cities.
            </PrimaryText>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
            </StyledForm>
            <Caption>
              By subscribing you agree with our{' '}
              <a
                onClick={() => window.location.replace(EXTERNAL_ROUTES.PRIVACY)}
                style={{ color: '#48DC95', cursor: 'pointer' }}
              >
                Privacy Policy
              </a>{' '}
              and provide consent to receiving updates from our company.
            </Caption>
          </FormProvider>
        </ContentWrapper>

        <div>
          <Text style={{ color: 'white', marginBottom: 0 }}>
            {CITIES[active].name}
          </Text>
          <Text style={{ color: '#B0B0B0', marginBottom: '8px' }}>
            {CITIES[active].numProperties} Properties
          </Text>
          <div style={{ display: 'flex' }}>
            {CITIES.map((_, idx) => (
              <GreenSquare
                key={idx}
                style={{
                  backgroundColor: idx !== active && '#B0B0B0',
                  marginRight: '8px',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </HeroImage>
  );
}

export const HeroImage = styled.div`
  width: 100vw;
  height: 110vh;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  padding: 50px 100px 15vh 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 50px 30px;
  }
`;

export const ContentWrapper = styled.div`
  width: 726px;
`;
