import {
  GreenSquare,
  Heading,
  Overline,
  PrimaryText,
  Text,
} from '@elements/Typography';
import { isMobileDevice } from '@utils/helpers';
import Slider from 'react-slick';
import styled from 'styled-components';

interface ValuePropsProps {
  overline: string;
  heading: string;
  primaryText: string;
  valueProps: { title; description }[];
}

export default function ValueProps({
  overline,
  heading,
  primaryText,
  valueProps,
}: ValuePropsProps) {
  const isMobile = isMobileDevice();
  const settings = {
    dots: false,
    slidesToShow: isMobile ? 1.25 : 2.5,
    swipeToSlide: true,
    infinite: false,
  };

  return (
    <SectionWrapper>
      <Overline>{overline}</Overline>
      <Heading>{heading}</Heading>
      <Text>{primaryText}</Text>

      <Slider {...settings}>
        {valueProps.map(({ title, description }, idx) => (
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

  &:hover {
    box-shadow: 2px 4px 25px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-width: 210px;
    height: 210px;
    padding: 24px;
    margin-right: 12px;
  }
`;
