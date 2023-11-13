import { CityfundCard } from '@components/cityfunds/CityfundCard';
import { PrimaryButton } from '@elements/Buttons';
import { SectionWrapper, StackWrapper } from '@elements/Containers';
import { Heading, LargeText } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { FUND_STATUS, REGULATION } from '@utils/constants';
import { ICityfund } from '@utils/models';
import { useState } from 'react';
import styled from 'styled-components';

interface CityfundsGridProps {
  cityfunds: ICityfund[];
}

export default function CityfundsGrid({ cityfunds }: CityfundsGridProps) {
  const isMobile = useIsMobile();
  const [toggle, setToggle] = useState<REGULATION>(null);
  const [showMore, setShowMore] = useState(false);

  const ALL_CARDS = cityfunds.map(({ fund_data, fund_content }) => ({
    fund_data,
    fund_content,
    images: [fund_content?.image_gallery[0], fund_content?.card_back],
  }));

  const SORTED_CARDS = ALL_CARDS.sort((a, b) => {
    if (
      a.fund_data.fund_status === FUND_STATUS.NEW_OFFERING &&
      b.fund_data.fund_status !== FUND_STATUS.NEW_OFFERING
    ) {
      return 1;
    }
    if (
      a.fund_data.fund_status !== FUND_STATUS.NEW_OFFERING &&
      b.fund_data.fund_status === FUND_STATUS.NEW_OFFERING
    ) {
      return -1;
    }

    if (
      a.fund_data.regulation === REGULATION.ACCREDITED &&
      b.fund_data.regulation !== REGULATION.ACCREDITED
    ) {
      return 1;
    }
    if (
      a.fund_data.regulation !== REGULATION.ACCREDITED &&
      b.fund_data.regulation === REGULATION.ACCREDITED
    ) {
      return -1;
    }

    return b.fund_data.total_assets - a.fund_data.total_assets;
  });

  const RETAIL_CARDS = SORTED_CARDS.filter(
    ({ fund_data }) => fund_data?.regulation === REGULATION.RETAIL
  );
  const SHOWN_CARDS =
    showMore || !isMobile ? RETAIL_CARDS : RETAIL_CARDS.slice(0, 3);

  return (
    <SectionWrapper style={{ gap: '2rem' }}>
      <StackWrapper
        style={{ gap: isMobile ? '0' : '0.5rem', marginBottom: '1.5rem' }}
      >
        <Heading>Explore Offerings</Heading>
        <LargeText>
          Pick your favorite fund, or invest in all of them.
        </LargeText>
      </StackWrapper>

      <GridWrapper
        style={{
          flexDirection: isMobile ? 'column' : 'row',
          flexWrap: isMobile ? 'nowrap' : 'wrap',
          marginBottom: isMobile ? 0 : '4rem',
          alignSelf: 'flex-start',
        }}
      >
        {SHOWN_CARDS.map((card, idx) => (
          <>
            {isMobile ? (
              <FadeWrapper key={idx}>
                <CityfundCard {...card} image={card?.images[0]} isHome />
              </FadeWrapper>
            ) : (
              <FadeWrapper key={idx}>
                <TopWrapper>
                  <CityfundCard {...card} image={card?.images[0]} isHome />
                </TopWrapper>
                <BottomWrapper>
                  <CityfundCard {...card} image={card?.images[1]} isHome />
                </BottomWrapper>
              </FadeWrapper>
            )}
          </>
        ))}
      </GridWrapper>

      {isMobile && (
        <div style={{ marginTop: '1rem' }}>
          <PrimaryButton onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Show Less' : 'Show More'}
          </PrimaryButton>
        </div>
      )}
    </SectionWrapper>
  );
}

const FadeWrapper = styled.div``;

const GridWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const TopWrapper = styled.div`
  opacity: 1;
  -webkit-transition: opacity 0.5s ease-in-out;
  -moz-transition: opacity 0.5s ease-in-out;
  -o-transition: opacity 0.5s ease-in-out;
  -ms-transition: opacity 0.5s ease-in-out;
  transition: opacity 0.5s ease-in-out;

  &:hover {
    opacity: 0;
  }
`;

const BottomWrapper = styled.div`
  position: relative;
  bottom: 18rem;
  z-index: -1;
  height: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    bottom: 20rem;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;
