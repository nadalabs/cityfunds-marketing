import {
  GreenSquare,
  Heading,
  Overline,
  PrimaryText,
  Text,
} from '@elements/Typography';
import styled from 'styled-components';

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
      <Overline>You may be wondering...</Overline>
      <Heading>Why Cityfunds?</Heading>
      <Text>We have plenty of reasons.</Text>

      <div style={{ display: 'flex', overflowX: 'scroll', padding: '75px 0' }}>
        {VALUE_PROPS.map(({ title, description, link }) => (
          <CardWrapper key={title}>
            <GreenSquare
              style={{
                height: '30px',
                width: '30px',
                borderRadius: '7px',
                marginBottom: '20px',
              }}
            />
            <PrimaryText style={{ color: 'black', fontWeight: 600 }}>
              {title}
            </PrimaryText>
            <Text>{description}</Text>
          </CardWrapper>
        ))}
      </div>
    </>
  );
}

export const CardWrapper = styled.div`
  min-width: 450px;
  height: 450px;
  background: #ffffff;
  box-shadow: 2px 4px 25px rgba(0, 0, 0, 0.1);
  border-radius: 52px;
  padding: 52px;
  margin-right: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-width: 210px;
    height: 210px;
    padding: 24px;
    margin-right: 12px;
  }
`;
