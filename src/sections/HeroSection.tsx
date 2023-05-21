import styled from 'styled-components';
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
      <HeroImage>
        <ContentWrapper>
          <FormProvider {...methods}>
            <Heading1 style={{color: 'white'}}>Own a Piece of Your Favorite City</Heading1>
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
        </ContentWrapper>
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
  padding: 100px;
`;

export const ContentWrapper = styled.div`
  width: 766px;
`;
