import { HeadingLarge, Overline, PrimaryText } from '@elements/Typography';
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
      question: 'What am I investing in?',
      answer:
        'Fractional home equity investments across a top city. Earn equity in multiple homes on day one.',
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
                  <div key={jdx}>
                    <HoverHeading
                      onClick={() => handleOnClick(jdx)}
                      style={{ color: idx === jdx ? '#48DC95' : 'black' }}
                    >
                      {question}
                    </HoverHeading>
                    {isMobile && idx === jdx && (
                      <PrimaryText>{answer}</PrimaryText>
                    )}
                  </div>
                ))}
              </div>

              {!isMobile && <PrimaryText>{answer}</PrimaryText>}
            </div>
          </div>
        ))}
      </Slider>
    </SectionWrapper>
  );
}

export const SectionWrapper = styled.div`
  padding: 92px 156px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 24px;
  }
`;

export const HoverHeading = styled(HeadingLarge)`
  transition: ${({ theme }) => theme.transitions.ease};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 28px;
  cursor: pointer;
  width: 700px;

  &:hover {
    color: ${({ theme }) => theme.colors.lightGrey};
  }
`;
