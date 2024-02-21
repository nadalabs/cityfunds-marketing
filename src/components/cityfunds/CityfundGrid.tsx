'use client';
import CityfundCard from '@components/cityfunds/CityfundCard';
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
import { FUND_STATUS } from '@utils/constants';
import { ICityfund } from '@utils/models';
import { useState } from 'react';

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
    )
    .sort((a, b) => {
      if (a.fund_data.fund_status === b.fund_data.fund_status) {
        return b.fund_data.share_price - a.fund_data.share_price;
      }
      if (a.fund_data.fund_status === FUND_STATUS.NEW_OFFERING) {
        return 1;
      }
      if (b.fund_data.fund_status === FUND_STATUS.NEW_OFFERING) {
        return -1;
      }
      return 0;
    });
  3;

  const SHOWN_CARDS = showMore || !isMobile ? ALL_CARDS : ALL_CARDS.slice(0, 3);

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

      <GridWrapper>
        {SHOWN_CARDS.map((card, idx) => (
          <div key={idx}>
            <TopWrapper>
              <CityfundCard {...card} image={card?.images[0]} width={400} />
            </TopWrapper>
            {!isMobile && (
              <BottomWrapper>
                <CityfundCard {...card} image={card?.images[1]} width={400} />
              </BottomWrapper>
            )}
          </div>
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
