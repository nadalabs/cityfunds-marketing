import styled from 'styled-components';
import { Heading1, Heading2, Text } from '../elements/Typography';
import { SecondaryButton } from '../elements/Buttons';

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
          width: '534px',
          backgroundColor: '#48DC95',
          borderRadius: '120px',
          marginRight: '98px',
        }}
      />

      <div>
        <Heading1>How it Works</Heading1>
        <Text>Join our community of thousands.</Text>

        <div style={{ display: 'flex' }}>
          {STEPS.map(({ title, description, link }) => (
            <div key={title} style={{ marginRight: '32px' }}>
              <div
                style={{
                  height: '15px',
                  width: '15px',
                  backgroundColor: '#48DC95',
                  borderRadius: '3px',
                }}
              />
              <Heading2>{title}</Heading2>
              <Text>{description}</Text>
              <SecondaryButton>Learn More</SecondaryButton>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const CardWrapper = styled.div``;
