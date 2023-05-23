import { FormInput, StyledForm } from '@elements/FormInput';
import { Heading, Overline, Text } from '@elements/Typography';
import { isMobileDevice } from '@utils/helpers';
import Image from 'next/image';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import styled from 'styled-components';

export default function EmailCapture({}) {
  const isMobile = isMobileDevice();
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
      <div style={{ marginRight: '84px' }}>
        <Overline>Exclusive Perk for Alts.co Readers </Overline>
        <Heading>Invest $1,000</Heading>
        <Heading style={{ color: '#48DC95' }}>Get $100</Heading>
        <Text style={{ width: '660px', marginBottom: '8px' }}>
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
      </div>

      {!isMobile && (
        <Image
          width={350}
          height={700}
          alt={'Phone Screen'}
          src={'/images/phone-screen.png'}
        />
      )}
    </SectionWrapper>
  );
}

export const SectionWrapper = styled.div`
  padding: 180px 156px;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 24px;
  }
`;
