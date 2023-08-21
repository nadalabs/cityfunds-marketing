import { CityfundCard } from '@components/cityfunds/CityfundCard';
import { StackWrapper } from '@elements/Containers';
import { Heading, LargeText, SmallHeading } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { FUND_STATUS, REGULATION } from '@utils/constants';
import { ICityfund } from '@utils/models';
import styled from 'styled-components';

interface CityfundSliderProps {
  cityfunds: ICityfund[];
  isHome?: boolean;
}

export default function CityfundSlider({
  cityfunds,
  isHome,
}: CityfundSliderProps) {
  const isMobile = useIsMobile();

  const ALL_CARDS = cityfunds.map(({ fund_data, fund_content }) => ({
    fund_data,
    fund_content,
    images: [fund_content?.image_gallery[0], fund_content?.card_back],
  }));

  const SORTED_CARDS = ALL_CARDS.sort((a, b) => {
    if (a.fund_data.fund_name === 'Yield') {
      return 1;
    }
    if (b.fund_data.fund_name === 'Yield') {
      return -1;
    }
    if (
      a.fund_data.fund_name === 'Portfolio' &&
      b.fund_data.fund_name !== 'Portfolio'
    )
      return -1;
    if (
      a.fund_data.fund_name !== 'Portfolio' &&
      b.fund_data.fund_name === 'Portfolio'
    )
      return 1;
    if (
      a.fund_data.fund_status !== FUND_STATUS.NEW_OFFERING &&
      b.fund_data.fund_status === FUND_STATUS.NEW_OFFERING
    )
      return -1;
    if (
      a.fund_data.fund_status !== FUND_STATUS.NEW_OFFERING &&
      b.fund_data.fund_status === FUND_STATUS.NEW_OFFERING
    )
      return 1;
    if (
      a.fund_data.fund_status !== FUND_STATUS.PERFORMING &&
      b.fund_data.fund_status === FUND_STATUS.NEW_OFFERING
    ) {
      return b.fund_data.appreciation - a.fund_data.appreciation;
    }
    return 0;
  });

  const DISPLAYED_CARDS = SORTED_CARDS.filter(
        ({ fund_data }) => fund_data?.fund_status !== FUND_STATUS.NEW_OFFERING
      );

  return (
    <SectionWrapper style={{ marginLeft: isHome && !isMobile ? '150px' : 0 }}>
        <StackWrapper style={{ gap: isMobile ? '0' : '0.5rem' }}>
          <Heading>Explore Offerings</Heading>
          <LargeText>
            Pick your favorite fund, or invest in all of them.
          </LargeText>
        </StackWrapper>

      <div
        style={{
          display: 'flex',
          flexDirection: isMobile && isHome ? 'column' : 'row',
          gap: '1.5rem',
          paddingRight: isMobile || !isHome ? 0 : '150px',
          overflowX: 'scroll',
        }}
      >
        {DISPLAYED_CARDS.map((card, idx) => (
          <>
            {isMobile ? (
              <FadeWrapper key={idx}>
                <CityfundCard
                  {...card}
                  image={card?.images[0]}
                  isHome={isHome}
                />
              </FadeWrapper>
            ) : (
              <FadeWrapper key={idx}>
                <TopWrapper>
                  <CityfundCard
                    {...card}
                    image={card?.images[0]}
                    isHome={isHome}
                  />
                </TopWrapper>
                <BottomWrapper>
                  <CityfundCard
                    {...card}
                    image={card?.images[1]}
                    isHome={isHome}
                  />
                </BottomWrapper>
              </FadeWrapper>
            )}
          </>
        ))}
      </div>
    </SectionWrapper>
  );
}

const FadeWrapper = styled.div`
  width: 24rem;
  height: 32rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    height: 20rem;
  }
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
  bottom: 32rem;
  z-index: -1;

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

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
