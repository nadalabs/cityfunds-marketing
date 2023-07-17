import { SectionWrapper } from '@elements/Containers';
import { Heading, LinkText, Overline, PrimaryText } from '@elements/Typography';
import { EXTERNAL_ROUTES } from '@utils/constants';
import { useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

interface FaqsSectionProps {
  overline?: string;
  faqs: {question: string, answer: string}[]
}

export default function FaqsSection({ overline, faqs }: FaqsSectionProps) {
  const sliderRef = useRef();

  const handleOnClick = (index) => {
    // @ts-ignore-next-line
    sliderRef?.current.slickGoTo(index);
  };

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    cssEase: 'linear',
  };

  return (
    <SectionWrapper>
      {overline && <Overline>{overline}</Overline>}

      <Slider {...settings} ref={sliderRef}>
        {faqs.map((_, idx) => (
          <div key={idx}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div>
                {faqs.map(({ question, answer }, jdx) => (
                  <ContentWrapper key={jdx}>
                    <HoverHeading
                      onClick={() => handleOnClick(jdx)}
                      style={{ color: idx === jdx ? '#48DC95' : 'black' }}
                    >
                      {question}
                    </HoverHeading>
                    {idx === jdx && (
                      <TextWrapper>
                        <PrimaryText>{answer}</PrimaryText>
                      </TextWrapper>
                    )}
                  </ContentWrapper>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <LinkText href={EXTERNAL_ROUTES.HUBSPOT_FAQS} target='_blank'>See All FAQs</LinkText>
    </SectionWrapper>
  );
}

export const ContentWrapper = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    height: inherit;
    margin-bottom: 1rem;
  }
`;

export const HoverHeading = styled(Heading)`
  transition: ${({ theme }) => theme.transitions.ease};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 1rem;
  cursor: pointer;
  width: 50%;
  font-size: 3rem;

  &:hover {
    color: ${({ theme }) => theme.colors.lightGrey};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    font-size: 3rem;
    line-height: 3.5rem;
  }
`;

export const TextWrapper = styled(Heading)`
  max-width: 45%;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 100%;
  }
`;
