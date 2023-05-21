import styled from 'styled-components';
import Image from 'next/image';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { FormInput, FormWrapper, StyledForm } from '../elements/FormInput';
import { Heading, PrimaryText, Text } from '../elements/Typography';

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
      // await window.analytics.track('Lead Capture');
    } catch (err: any) {
      setError('email', {
        message: err.response.data.errors.message,
      });
    }
  };

  return (
    <CtaWrapper>
      <FormProvider {...methods}>
        <Heading>Limited Time Offer for Alts.co Readers</Heading>
        <PrimaryText>
          Homeowner or not, call yourself a real estate investor today. As an
          added bonus get a free $100* when you invest $1000 in any city.
        </PrimaryText>
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
          By subscribing you agree with our Privacy Policy and provide consent
          to receiving updates from our company.
        </Text>
      </FormProvider>
    </CtaWrapper>
  );
}

export const CtaWrapper = styled.div`
  padding: 180px 0;
`;
