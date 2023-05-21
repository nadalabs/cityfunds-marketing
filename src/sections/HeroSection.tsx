import Image from 'next/image';
import styled from 'styled-components';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { FormInput, StyledForm } from '../elements/FormInput';
import {
  GreenSquare,
  Heading,
  PrimaryText,
  Text,
} from '../elements/Typography';
import { useState } from 'react';

export default function HeroSection({}) {
  const [active, setActive] = useState(0);
  const CITIES = [
    { name: 'Dallas', imageUrl: '/location.png', numProperties: 10 },
    { name: 'Austin', imageUrl: '/location.png', numProperties: 10 },
    { name: 'Miami', imageUrl: '/location.png', numProperties: 10 },
    { name: 'Tampa', imageUrl: '/location.png', numProperties: 10 },
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
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background:
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 22.38%, rgba(0, 0, 0, 0.32) 44.79%, rgba(0, 0, 0, 0.87) 73.73%)',
      }}
    >
      <HeroImage>
        <ContentWrapper>
          <FormProvider {...methods}>
            <Heading style={{ color: 'white' }}>
              Own a Piece of Your Favorite City
            </Heading>
            <PrimaryText>
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
            <Text>
              By subscribing you agree with our Privacy Policy and provide
              consent to receiving updates from our company.
            </Text>

            <Text style={{ color: 'white', marginBottom: 0 }}>
              {CITIES[active].name}
            </Text>
            <Text style={{ color: 'grey', marginBottom: '8px' }}>
              {CITIES[active].numProperties} Properties
            </Text>
            <div style={{ display: 'flex' }}>
              {CITIES.map((_, idx) => (
                <GreenSquare
                  style={{
                    backgroundColor: idx !== active && 'rgba(2, 1, 1, 0.05)',
                    marginRight: '8px',
                  }}
                />
              ))}
            </div>
          </FormProvider>
        </ContentWrapper>

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
      </HeroImage>
    </div>
  );
}

export const HeroImage = styled.div`
  background-image: url(/hero-1.png);
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 100px;
`;

export const ContentWrapper = styled.div`
  width: 766px;
`;
