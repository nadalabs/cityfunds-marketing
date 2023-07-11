import { SectionWrapper } from '@elements/Containers';
import { Heading, Overline, PrimaryText } from '@elements/Typography';
import { ICityfund } from '@utils/models';
import { useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

interface DocumentCenterProps {
  funds: ICityfund[];
}

export default function DocumentCenter({ funds }: DocumentCenterProps) {
  const sliderRef = useRef();

  const allDocuments = funds.map(({ name, documents }) => ({
    name,
    documents: [
      { label: 'Offering Memorandum', value: documents.offeringMemorandum },
      {
        label: 'Subscription Agreement',
        value: documents.subscriptionAgreement,
      },
      { label: 'Executive Summary', value: documents.executiveSummary },
      { label: 'Pitch Deck', value: documents.investorPitchDeck },
    ],
  }));
  console.log(allDocuments);

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
      <Overline>Document Center</Overline>

      <Slider {...settings} ref={sliderRef}>
        {allDocuments.map((_, idx) => (
          <div key={idx}>
            {allDocuments.map(({ name, documents }, jdx) => (
              <ContentWrapper key={jdx}>
                <HoverHeading
                  onClick={() => handleOnClick(jdx)}
                  style={{ color: idx === jdx ? '#48DC95' : 'black' }}
                >
                  {name}
                </HoverHeading>

                {idx === jdx &&
                  documents.map(({ value, label }, kdx) => (
                    <PrimaryText
                      key={kdx}
                      onClick={() => window.open(value, '_blank')}
                      style={{ marginLeft: '2rem' }}
                    >
                      {label}
                    </PrimaryText>
                  ))}
              </ContentWrapper>
            ))}
          </div>
        ))}
      </Slider>
    </SectionWrapper>
  );
}

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

export const HoverHeading = styled(Heading)`
  transition: ${({ theme }) => theme.transitions.ease};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 2.5rem;
  cursor: pointer;

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
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 100%;
  }
`;
