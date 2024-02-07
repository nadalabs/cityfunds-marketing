'use client';
import CityfundCard from '@components/cityfunds/CityfundCard';
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

interface AccreditedGridProps {
  cityfunds: ICityfund[];
}

export default function AccreditedGrid({ cityfunds }: AccreditedGridProps) {
  const isMobile = useIsMobile();

  const ALL_CARDS = cityfunds
    .map(({ fund_data, fund_content }) => ({
      fund_data,
      fund_content,
      images: [fund_content?.image_gallery[0], fund_content?.card_back],
    }))
    .sort((a, b) =>
      a.fund_data?.share_price < b.fund_data?.share_price ? 1 : -1
    );

  const ACCRED_CARDS = ALL_CARDS.filter(
    ({ fund_data }) => fund_data?.regulation === REGULATION.ACCREDITED
  );

  return (
    <SectionWrapper $isBackground>
      <StackWrapper style={{ gap: 0, marginBottom: '1.5rem' }}>
        <Heading style={{ fontSize: '2.5rem' }}>
          Are you an Accredited Investor?
        </Heading>
        <LargeText>
          Unlock exclusive offerings like the Select and Yield Funds.
        </LargeText>
      </StackWrapper>

      <GridWrapper>
        {ACCRED_CARDS.map((card, idx) => (
          <div key={idx} style={{ zIndex: 1 }}>
            <TopWrapper>
              <CityfundCard {...card} image={card?.images[0]} width={800} />
            </TopWrapper>
            {!isMobile && (
              <BottomWrapper>
                <CityfundCard {...card} image={card?.images[1]} width={800} />
              </BottomWrapper>
            )}
          </div>
        ))}
      </GridWrapper>
    </SectionWrapper>
  );
}
