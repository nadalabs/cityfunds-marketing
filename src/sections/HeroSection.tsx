import styled from 'styled-components';
import Image from 'next/image';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { FormInput, FormWrapper, StyledForm } from '../elements/FormInput';
import { Heading1, Heading2, Text } from '../elements/Typography';

export default function HeroSection({}) {
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
      <div
        style={{
          backgroundImage: 'url(/hero-1.png)',
          backgroundSize: 'cover',
          width: '100vw',
          height: '100vh',
        }}
      >
        <CtaWrapper>
          <FormProvider {...methods}>
            <Heading1>Own a Piece of Your Favorite City</Heading1>
            <Heading2>
              Diversified real estate portfolios with passive income in the
              nation's top cities.
            </Heading2>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
              {/* <FormInput
            name="email"
            rules={{
              required: 'Email address is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              },
            }}
            type="email"
            placeholder="Email Address"
          /> */}
            </StyledForm>
            <Text>
              By subscribing you agree with our Privacy Policy and provide
              consent to receiving updates from our company.
            </Text>
          </FormProvider>
        </CtaWrapper>
      </div>
    </div>
  );
}

export const CtaWrapper = styled.div`
  position: relative;
  bottom: 0;
`;
