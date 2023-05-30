import {
  GreenSquare,
  Heading,
  Overline,
  PrimaryText,
  Text,
} from '@elements/Typography';
import Slider from 'react-slick';
import styled from 'styled-components';

interface ValuePropsProps {
  overline: string;
  heading: string;
  primaryText: string;
  valueProps: { title; description }[];
}

export default function TextSlider({
  overline,
  heading,
  primaryText,
  valueProps,
}: ValuePropsProps) {
  const settings = {
    dots: false,
    slidesToShow: 1,
    swipeToSlide: true,
    infinite: false,
    variableWidth: true,
  };

  return (
    <SectionWrapper>
      <Overline>{overline}</Overline>
      <Heading>{heading}</Heading>
      <Text>{primaryText}</Text>

      <div style={{ position: 'relative', right: '1rem' }}>
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
      </div>
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
  margin: 1rem;
  transition: ${({ theme }) => theme.transitions.ease};
  top: 0;

  &:hover {
    top: 50px;
    box-shadow: 2px 4px 25px rgba(0, 0, 0, 0.1);
  }
`;
