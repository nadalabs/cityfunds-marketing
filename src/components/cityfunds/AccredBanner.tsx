import { CityfundCard } from '@components/cityfunds/CityfundCard';
import { PrimaryButton } from '@elements/Buttons';
import {
  BottomWrapper,
  GridWrapper,
  SectionWrapper,
  StackWrapper,
  TopWrapper,
} from '@elements/Containers';
import { Heading, PrimaryText } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { REGULATION } from '@utils/constants';
import { ICityfund } from '@utils/models';
import { useRouter } from 'next/router';
import styled from 'styled-components';

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
    <SectionWrapper
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: isMobile ? 'column-reverse' : 'row',
        gap: isMobile ? '1.5rem' : '5rem',
      }}
      isBackground
    >
      <ContentWrapper>
        <StackWrapper style={{ gap: '1rem' }}>
          <Heading>Are you an Accredited Investor?</Heading>
          <PrimaryText>
            Unlock exclusive offerings like the Yield and Portfolio Funds.
          </PrimaryText>
          <div>
            <PrimaryButton onClick={() => router.push(`/investors`)}>
              Learn More
            </PrimaryButton>
          </div>
        </StackWrapper>
      </ContentWrapper>

      <GridWrapper
        style={{
          flexDirection: isMobile ? 'column' : 'row',
          flexWrap: isMobile ? 'nowrap' : 'wrap',
          marginBottom: isMobile ? 0 : '4rem',
          alignSelf: 'flex-start',
        }}
      >
        {ACCRED_CARDS.map((card, idx) => (
          <>
            {isMobile ? (
              <div key={idx}>
                <CityfundCard {...card} image={card?.images[0]} isHome isWide />
              </div>
            ) : (
              <div key={idx}>
                <TopWrapper>
                  <CityfundCard
                    {...card}
                    image={card?.images[0]}
                    isHome
                    isWide
                  />
                </TopWrapper>
                <BottomWrapper>
                  <CityfundCard
                    {...card}
                    image={card?.images[1]}
                    isHome
                    isWide
                  />
                </BottomWrapper>
              </div>
            )}
          </>
        ))}
      </GridWrapper>
    </SectionWrapper>
  );
}

export const ContentWrapper = styled.div`
  width: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    margin-right: 0;
  }
`;
