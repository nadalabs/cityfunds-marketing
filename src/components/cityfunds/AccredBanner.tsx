import { CityfundCard } from '@components/cityfunds/CityfundCard';
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
import { useRouter } from 'next/router';

interface AccredBannerProps {
  cityfunds: ICityfund[];
}

export default function AccredBanner({ cityfunds }: AccredBannerProps) {
  const isMobile = useIsMobile();
  const router = useRouter();

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
    <SectionWrapper isBackground>
      <GridWrapper style={{ maxWidth: '100rem' }}>
        <StackWrapper style={{ gap: '0.5rem' }}>
          <Heading style={{ fontSize: '2.65rem', margin: 0 }}>
            Are you an Accredited Investor?
          </Heading>
          <LargeText>
            Unlock exclusive offerings like the Portfolio and Yield Funds.
          </LargeText>
        </StackWrapper>

        {ACCRED_CARDS.map((card, idx) => (
          <div key={idx}>
            <TopWrapper>
              <CityfundCard
                {...card}
                image={card?.images[0]}
                width={600}
                isHome
              />
            </TopWrapper>
            <BottomWrapper>
              <CityfundCard
                {...card}
                image={card?.images[1]}
                width={600}
                isHome
              />
            </BottomWrapper>
          </div>
        ))}
      </GridWrapper>
    </SectionWrapper>
  );
}
