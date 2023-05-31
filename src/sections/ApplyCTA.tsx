import { PrimaryButton } from '@elements/Buttons';
import { SectionWrapper } from '@elements/Containers';
import { FormInput, FormWrapper, StyledForm } from '@elements/FormInput';
import { Heading, Overline } from '@elements/Typography';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';

export default function ApplyCTA() {
  const methods = useForm<FieldValues>({
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone: {
        country_code: '+1',
        number: '',
      },
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
    <SectionWrapper>
      <FormProvider {...methods}>
        <Overline>Lets Get Started</Overline>
        <Heading>Apply for a Homeshare</Heading>
        <FormWrapper>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '32px',
              }}
            >
              <div style={{ width: '48%' }}>
                <FormInput
                  name="first_name"
                  rules={{ required: 'First name is required' }}
                  type="text"
                  placeholder="First Name"
                />
              </div>

              <div style={{ width: '48%' }}>
                <FormInput
                  name="last_name"
                  rules={{ required: 'First name is required' }}
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>

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
              placeholder="Email Address"
            />

            <FormInput
              name="phone.number"
              rules={{
                required: 'Phone number is required',
                pattern: { value: /^\d{10}$/, message: 'Invalid phone number' },
              }}
              mask="(999) 999-9999"
              type="tel"
              placeholder="Phone Number"
            />

            <PrimaryButton disabled={!formState.isValid}>
              {formState.isSubmitting ? 'Signing up...' : 'Sign up'}
            </PrimaryButton>
          </StyledForm>
        </FormWrapper>
      </FormProvider>
    </SectionWrapper>
  );
}
