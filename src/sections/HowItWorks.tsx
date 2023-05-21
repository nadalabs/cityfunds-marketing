import styled from 'styled-components';
import {
  GreenSquare,
  Heading,
  Overline,
  PrimaryText,
  Text,
} from '../elements/Typography';
import { PrimaryButton } from '../elements/Buttons';

export default function HowItWorks({}) {
  const STEPS = [
    {
      title: 'Select a City',
      description:
        'Cityfunds is the only investment platform which provides direct access to diversified portfolios of owner occupied homes in the nation’s top cities.',
      link: '',
    },
    {
      title: 'Invest Money',
      description:
        'Cityfunds is the only investment platform which provides direct access to diversified portfolios of owner occupied homes in the nation’s top cities.',
      link: '',
    },
    {
      title: 'Build Wealth',
      description:
        'Cityfunds is the only investment platform which provides direct access to diversified portfolios of owner occupied homes in the nation’s top cities.',
      link: '',
    },
  ];

  return (
    <div style={{ display: 'flex', padding: '204px 0' }}>
      <div
        style={{
          height: '534px',
          minWidth: '534px',
          backgroundColor: '#48DC95',
          borderRadius: '120px',
          marginRight: '98px',
        }}
      />

      <div>
        <Overline>Real Estate Investing Simplified</Overline>
        <Heading>How it Works</Heading>
        <Text>Join our community of thousands.</Text>

        <div style={{ display: 'flex', marginTop: '120px' }}>
          {STEPS.map(({ title, description, link }) => (
            <div key={title} style={{ marginRight: '32px' }}>
              <GreenSquare style={{ marginBottom: '24px' }} />
              <PrimaryText style={{ color: 'black', fontWeight: 600 }}>
                {title}
              </PrimaryText>
              <Text>{description}</Text>
              <PrimaryButton>Get Started</PrimaryButton>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const CardWrapper = styled.div``;
