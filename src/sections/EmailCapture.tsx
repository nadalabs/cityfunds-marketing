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
    <SectionWrapper>
      <div style={{ marginBottom: '48px' }}>
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
      <Heading>Limited Time Offer for Alts.co Readers</Heading>
      <Text style={{ marginBottom: '8px' }}>
        Homeowner or not, call yourself a real estate investor today. As an
        added bonus get a free $100* when you invest $1000 in any city.
      </Text>
      <Text style={{ color: '#989898' }}>*valid until 5/31/23</Text>
      <FormProvider {...methods}>
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
      </FormProvider>
    </SectionWrapper>
  );
}

export const SectionWrapper = styled.div`
  width: 800px;
  padding: 180px 0;
`;
