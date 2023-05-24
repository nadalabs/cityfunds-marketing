import { PrimaryButton } from '@elements/Buttons';
import { FormInput, StyledForm } from '@elements/FormInput';
import { Caption } from '@elements/Typography';
import { EXTERNAL_ROUTES } from '@utils/constants';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';

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
      console.log(inputs.email);
      // await window.analytics.track('Lead Capture');
    } catch (err: any) {
      setError('email', {
        message: err.response.data.errors.message,
      });
    }
  };

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: 'flex' }}>
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
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
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
  );
}
