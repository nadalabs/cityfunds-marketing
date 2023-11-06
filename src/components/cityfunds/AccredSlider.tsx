import AccredCard from '@components/cityfunds/AccredCard';
import { SectionWrapper, StackWrapper } from '@elements/Containers';
import { Heading, LargeText } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { FUND_STATUS, REGULATION } from '@utils/constants';
import { ICityfund } from '@utils/models';
import styled from 'styled-components';

interface AccredSliderProps {
  cityfunds: ICityfund[];
  isHome?: boolean;
}

export default function AccredSlider({ cityfunds, isHome }: AccredSliderProps) {
  const isMobile = useIsMobile();

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
      a.fund_data.regulation === REGULATION.RETAIL &&
      b.fund_data.regulation !== REGULATION.RETAIL
    ) {
      return 1;
    }
    if (
      a.fund_data.regulation !== REGULATION.RETAIL &&
      b.fund_data.regulation === REGULATION.RETAIL
    ) {
      return -1;
    }

    return b.fund_data.total_assets - a.fund_data.total_assets;
  });

  const DISPLAYED_CARDS = SORTED_CARDS.filter(
    ({ fund_data }) => fund_data?.fund_status !== FUND_STATUS.NEW_OFFERING
  );

  return (
    <SectionWrapper>
      <StackWrapper
        style={{ gap: isMobile ? '0' : '0.5rem', marginBottom: '1.5rem' }}
      >
        <Heading>Explore Offerings</Heading>
        <LargeText>
          Pick your favorite fund, or invest in all of them.
        </LargeText>
      </StackWrapper>

      <div style={{ display: 'flex' }}>
        <ScrollWrapper>
          {DISPLAYED_CARDS?.map((card, idx) => (
            <>
              {isMobile ? (
                <FadeWrapper key={idx}>
                  <AccredCard
                    {...card}
                    image={card?.images[0]}
                    isHome={isHome}
                  />
                </FadeWrapper>
              ) : (
                <FadeWrapper key={idx}>
                  <TopWrapper>
                    <AccredCard
                      {...card}
                      image={card?.images[0]}
                      isHome={isHome}
                    />
                  </TopWrapper>
                  <BottomWrapper>
                    <AccredCard
                      {...card}
                      image={card?.images[1]}
                      isHome={isHome}
                    />
                  </BottomWrapper>
                </FadeWrapper>
              )}
            </>
          ))}
        </ScrollWrapper>
        <ScrollFade />
      </div>
    </SectionWrapper>
  );
}

const FadeWrapper = styled.div`
  width: 22rem;
  height: 36rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    height: 30rem;
  }
`;

const ScrollWrapper = styled.div`
  position: relative;
  bottom: 0.5rem;
  right: 1rem;
  padding: 0.5rem 4rem 1rem 1rem;
  display: flex;
  gap: 1.5rem;
  overflow-x: scroll;
  mask-image: linear-gradient(
    to right,
    transparent,
    white 1rem,
    white 90%,
    transparent
  );
`;

const ScrollFade = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 3.125rem;
  background: linear-gradient(to left, #ffffff, transparent);
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
  bottom: 36rem;
  z-index: -1;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    bottom: 30rem;
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