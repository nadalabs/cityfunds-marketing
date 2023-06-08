import { SectionWrapper } from '@elements/Containers';
import { Heading, Overline, PrimaryText } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

export default function FaqsSection({}) {
  const isMobile = useIsMobile();
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

  const FAQS = [
    {
      question: 'What is a Cityfund?',
      answer:
        'Cityfunds is the only investment platform which provides direct access to diversified portfolios of owner occupied homes in the nation’s top cities.',
    },
    {
      question: 'Who are Cityfunds for?',
      answer:
        "Built for people who want to join the exponential growth of the nation's top cities.",
    },
    {
      question: 'What makes Cityfunds different?',
      answer:
        'Investing in owner occupied homes gives better home values, faster appreciation, and low overhead since the owner is caring for their primary residence.',
    },
    {
      question: 'Will my money be tied up?',
      answer:
        "No! We have redemption programs in place for you. You're either thrilled about your portfolio growth or sell your shares to get your money back.",
    },
  ];

  return (
    <SectionWrapper>
      <Overline>You may also be wondering...</Overline>

      <Slider {...settings} ref={sliderRef}>
        {FAQS.map(({ answer }, idx) => (
          <div key={idx}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div>
                {FAQS.map(({ question, answer }, jdx) => (
                  <ContentWrapper key={jdx}>
                    <HoverHeading
                      onClick={() => handleOnClick(jdx)}
                      style={{ color: idx === jdx ? '#48DC95' : 'black' }}
                    >
                      {question}
                    </HoverHeading>
                    {idx === jdx && (
                      <PrimaryText style={{maxWidth: '500px'}}>{answer}</PrimaryText>
                    )}
                  </ContentWrapper>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </SectionWrapper>
  );
}

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

export const HoverHeading = styled(Heading)`
  transition: ${({ theme }) => theme.transitions.ease};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 2rem;
  cursor: pointer;
  width: 700px;

  &:hover {
    color: ${({ theme }) => theme.colors.lightGrey};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;
