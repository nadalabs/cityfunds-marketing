import { CityfundCard } from '@components/cityfunds/CityfundCard';
import { PrimaryButton } from '@elements/Buttons';
import {
  BottomWrapper,
  GridWrapper,
  SectionWrapper,
  StackWrapper,
  TopWrapper,
} from '@elements/Containers';
import { Heading, LargeText } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { REGULATION } from '@utils/constants';
import { ICityfund } from '@utils/models';
import { useState } from 'react';
import styled from 'styled-components';

interface CityfundsGridProps {
  cityfunds: ICityfund[];
}

export default function CityfundsGrid({ cityfunds }: CityfundsGridProps) {
  const isMobile = useIsMobile();
  const [showMore, setShowMore] = useState(false);

  const ALL_CARDS = cityfunds
    .map(({ fund_data, fund_content }) => ({
      fund_data,
      fund_content,
      images: [fund_content?.image_gallery[0], fund_content?.card_back],
    }))
    .sort((a, b) =>
      a.fund_data?.share_price < b.fund_data?.share_price ? 1 : -1
    );

  const RETAIL_CARDS = ALL_CARDS.filter(
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
              <div key={idx}>
                <CityfundCard {...card} image={card?.images[0]} isHome />
              </div>
            ) : (
              <div key={idx}>
                <TopWrapper>
                  <CityfundCard {...card} image={card?.images[0]} isHome />
                </TopWrapper>
                <BottomWrapper>
                  <CityfundCard {...card} image={card?.images[1]} isHome />
                </BottomWrapper>
              </div>
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

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;
