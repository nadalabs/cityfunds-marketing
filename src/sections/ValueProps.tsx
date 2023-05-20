import styled from 'styled-components';
import { Heading1, Heading2, Text } from '../elements/Typography';
import { SecondaryButton } from '../elements/Buttons';

export default function ValueProps({}) {
  const VALUE_PROPS = [
    {
      title: 'Accessibility',
      description:
        'No more heavy restrictions. Own homes in costly high demand cities regardless of where you live or your mortgage qualifications.',
      link: '',
    },
    {
      title: 'Diversification',
      description:
        'Not leveraged against 1 property. Immediate exposure to multiple properties spread across a top city keeping you safe from market movement on a specific home.',
      link: '',
    },
    {
      title: 'Passive Income',
      description:
        'Build a future where your money works for you. You as the savvy investor earn dividends quarterly from earned rental income and home sales.',
      link: '',
    },
    {
      title: 'Liquidity',
      description:
        'Don’t give up years of access to your money. Liquidate your funds by trading your shares.',
      link: '',
    },
  ];

  return (
    <>
      <Heading1>Why Cityfunds?</Heading1>
      <Text>Join our community of thousands.</Text>

      <div style={{ display: 'flex' }}>
        {VALUE_PROPS.map(({ title, description, link }) => (
          <CardWrapper key={title}>
            <Heading2>{title}</Heading2>
            <Text>{description}</Text>
            <SecondaryButton>Learn More</SecondaryButton>
          </CardWrapper>
        ))}
      </div>
    </>
  );
}

export const CardWrapper = styled.div`
  width: 450px;
  height: 450px;
  background: #ffffff;
  box-shadow: 2px 4px 25px rgba(0, 0, 0, 0.1);
  border-radius: 52px;
  padding: 52px;
`;
