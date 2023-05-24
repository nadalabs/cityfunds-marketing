import {
  GreenSquare,
  Heading,
  Overline,
  PrimaryText,
  Text,
} from '@elements/Typography';
import Slider from 'react-slick';
import styled from 'styled-components';

export default function ValueProps({}) {
  const settings = {
    dots: false,
    slidesToShow: 2.5,
    swipeToSlide: true,
    infinite: false,
  };

  const VALUE_PROPS = [
    {
      title: 'Unlocking liquid equity for home owners',
      description:
        'Not leveraged against 1 property. Immediate exposure to multiple properties spread across a top city keeping you safe from market movement on a specific home.',
    },
    {
      title: 'Accessibility',
      description:
        'No more heavy restrictions. Own homes in costly high demand cities regardless of where you live or your mortgage qualifications.',
    },
    {
      title: 'Diversification',
      description:
        'Not leveraged against 1 property. Immediate exposure to multiple properties spread across a top city keeping you safe from market movement on a specific home.',
    },
    {
      title: 'Passive Income',
      description:
        'Build a future where your money works for you. You as the savvy investor earn dividends quarterly from earned rental income and home sales.',
    },
    {
      title: 'Liquidity',
      description:
        'Don’t give up years of access to your money. Liquidate your funds by trading your shares.',
    },
    {
      title: 'In the Money',
      description:
        'No more waiting for growth. Your investments are immediately in the money. All homes are',
    },
    {
      title: 'Low Volatility',
      description:
        'No instantaneous spikes or drops like stocks. Real estate is the most stable asset class with the',
    },
    {
      title: 'Aligned',
      description:
        'No solo work. We’re a team with vested interest in these same properties as you. We acquire ',
    },
    {
      title: 'Professionally Managed',
      description:
        'Your investments are managed for you by a team of veterans with 20+ years of experience.',
    },
    {
      title: 'Hassle Free',
      description:
        'No heavy lifting. You invest and Nada handles the rest…from market research, property',
    },
    {
      title: '‍Inflation Protection',
      description:
        'Don’t lose the value of your dollar. Build an iron wall of protection by investing in real',
    },
    {
      title: 'No Personal Liability Risk',
      description:
        'No added debt. Our series LLC business structure protects you from being directly related to ',
    },
  ];

  return (
    <SectionWrapper>
      <Overline>You may be wondering...</Overline>
      <Heading>Why Cityfunds?</Heading>
      <Text>We have plenty of reasons.</Text>

      <Slider {...settings}>
        {VALUE_PROPS.map(({ title, description }, idx) => (
          <div key={idx}>
            <CardWrapper>
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
          </div>
        ))}
      </Slider>
    </SectionWrapper>
  );
}

export const SectionWrapper = styled.div`
  padding: 140px 0 140px 156px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 0 50px 30px;
  }
`;

export const CardWrapper = styled.div`
  width: 450px;
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
