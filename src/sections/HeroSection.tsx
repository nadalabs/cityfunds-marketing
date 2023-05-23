import { PrimaryButton } from '@elements/Buttons';
import { FormInput, StyledForm } from '@elements/FormInput';
import {
  Caption,
  GreenSquare,
  Heading,
  PrimaryText,
  Text,
} from '@elements/Typography';
import { EXTERNAL_ROUTES } from '@utils/constants';
import Image from 'next/image';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import Slider from 'react-slick';
import styled from 'styled-components';

export default function HeroSection({}) {
  const CITIES = [
    { name: 'Dallas', imageUrl: '/images/dallas-hero.png', numProperties: 10 },
    { name: 'Austin', imageUrl: '/images/austin-hero.png', numProperties: 10 },
    { name: 'Miami', imageUrl: '/images/miami-hero.png', numProperties: 10 },
    { name: 'Tampa', imageUrl: '/images/tampa-hero.png', numProperties: 10 },
  ];

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  };

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
    <Slider {...settings}>
      {CITIES.map(({ name, numProperties, imageUrl }, idx) => (
        <div key={idx}>
          <HeroImage
            style={{
              backgroundImage: `linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0) 22.38%,
                rgba(0, 0, 0, 0.32) 44.79%,
                rgba(0, 0, 0, 0.87) 73.73%
              ),
              url(${imageUrl})`,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex' }}>
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
              <PrimaryButton
                onClick={() => window.location.replace(EXTERNAL_ROUTES.WEB_APP)}
              >
                Get Started
              </PrimaryButton>
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
                    Diversified real estate portfolios with passive income in
                    the nation's top cities.
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
                      onClick={() =>
                        window.location.replace(EXTERNAL_ROUTES.PRIVACY)
                      }
                      style={{ color: '#48DC95', cursor: 'pointer' }}
                    >
                      Privacy Policy
                    </a>{' '}
                    and provide consent to receiving updates from our company.
                  </Caption>
                </FormProvider>
              </ContentWrapper>

              <div>
                <Text style={{ color: 'white', marginBottom: 0 }}>{name}</Text>
                <Text style={{ color: '#B0B0B0', marginBottom: '8px' }}>
                  {numProperties} Properties
                </Text>
                <div style={{ display: 'flex' }}>
                  {CITIES.map((_, jdx) => (
                    <GreenSquare
                      key={jdx}
                      style={{
                        backgroundColor: idx !== jdx && '#B0B0B0',
                        marginRight: '8px',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </HeroImage>
        </div>
      ))}
    </Slider>
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
  max-width: 726px;
`;
