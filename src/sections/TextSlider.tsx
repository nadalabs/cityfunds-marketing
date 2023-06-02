import { CardWrapper, SliderWrapper } from '@elements/Containers';
import {
  Heading,
  Overline,
  SecondaryText,
  TertiaryHeading,
} from '@elements/Typography';
import Slider from 'react-slick';
import styled from 'styled-components';

interface TextSliderProps {
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
}: TextSliderProps) {
  const settings = {
    dots: false,
    slidesToShow: 1,
    swipeToSlide: true,
    infinite: false,
    variableWidth: true,
    arrows: false,
  };

  return (
    <SliderWrapper>
      <Overline>{overline}</Overline>
      <Heading>{heading}</Heading>
      <SecondaryText>{primaryText}</SecondaryText>

      <div style={{ position: 'relative', right: '1rem' }}>
        <Slider {...settings}>
          {valueProps.map(({ title, description }, idx) => (
            <div key={idx}>
              <TextWrapper>
                <GreenSquare />
                <TertiaryHeading>{title}</TertiaryHeading>
                <SecondaryText>{description}</SecondaryText>
              </TextWrapper>
            </div>
          ))}
        </Slider>
      </div>
    </SliderWrapper>
  );
}

export const GreenSquare = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 30px;
  width: 30px;
  border-radius: 7px;
  margin-bottom: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 14px;
    width: 14px;
    border-radius: 3px;
    margin-bottom: 14px;
  }
`;

const TextWrapper = styled(CardWrapper)`
  box-shadow: 2px 4px 25px rgba(0, 0, 0, 0.1);
  margin: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 300px;
  }
`