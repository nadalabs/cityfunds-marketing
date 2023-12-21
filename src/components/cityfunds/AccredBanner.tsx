import { CityfundCard } from '@components/cityfunds/CityfundCard';
import {
  BottomWrapper,
  GridWrapper,
  StackWrapper,
  TopWrapper,
} from '@elements/Containers';
import { Heading, LargeText } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { REGULATION } from '@utils/constants';
import { ICityfund } from '@utils/models';
import styled from 'styled-components';

interface AccredBannerProps {
  cityfunds: ICityfund[];
}

export default function AccredBanner({ cityfunds }: AccredBannerProps) {
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
    <div style={{ height: isMobile ? '48rem' : '34rem' }}>
      <BackgroundWrapper>
        <GridWrapper style={{ maxWidth: '81rem' }}>
          <StackWrapper style={{ justifyContent: 'center', gap: '0.5rem' }}>
            <Heading style={{ fontSize: '2.5rem', margin: 0 }}>
              Are you an Accredited Investor?
            </Heading>
            <LargeText>
              Unlock exclusive offerings like the Select and Yield Funds.
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
      </BackgroundWrapper>
    </div>
  );
}

export const BackgroundWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  position: absolute;
  left: 0;
  width: 100vw;
  background: linear-gradient(
      0deg,
      rgba(42, 131, 86, 0.05) 0%,
      rgba(42, 131, 86, 0.05) 100%
    ),
    #fff;
  padding: 6.25rem 9.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 6.25rem 1rem;
  }
`;
