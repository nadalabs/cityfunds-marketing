import CityfundSlider from '@components/cityfunds/CityfundSlider';
import LongFormText from '@components/common/LongFormText';
import LogoSoup from '@components/marketing/LogoSoup';
import { PrimaryButton } from '@elements/Buttons';
import { GridWrapper, StackWrapper } from '@elements/Containers';
import { Heading } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { ICityfund } from '@utils/models';
import styled from 'styled-components';

interface PageHeroProps {
  feature: any;
  cityfunds: ICityfund[];
  btnText: string;
  onClick: () => void;
  logos: any[];
}

export default function PageHero({
  feature,
  cityfunds,
  btnText,
  onClick,
  logos,
}: PageHeroProps) {
  const isMobile = useIsMobile();

  return (
    <HeroWrapper>
      <GridWrapper style={{ gap: isMobile ? 0 : '4rem' }}>
        {isMobile && (
          <div style={{ maxWidth: '22rem' }}>
            <CityfundSlider cityfunds={cityfunds} />
          </div>
        )}

        <ContentWrapper>
          <StackWrapper style={{ gap: '1rem' }}>
            <Heading style={{ fontSize: isMobile ? '2rem' : '4rem' }}>
              {feature?.title}
            </Heading>
            <LongFormText content={feature?.description} isLarge />
            <div>
              <PrimaryButton onClick={onClick}>{btnText}</PrimaryButton>
            </div>
          </StackWrapper>

          {logos && (
            <LogoSoup
              overline="Featured In"
              logos={isMobile ? logos.slice(0, 4) : logos}
              isHero
            />
          )}
        </ContentWrapper>

        {!isMobile && (
          <div style={{ maxWidth: '32rem' }}>
            <CityfundSlider cityfunds={cityfunds} />
          </div>
        )}
      </GridWrapper>
    </HeroWrapper>
  );
}

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8rem;
  height: 100vh;
  padding: 9.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column-reverse;
    justify-content: center;
    padding: 1rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;
  width: 100%;
  max-width: 36rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: center;
    padding: 2rem;
    margin: 0;
  }
`;
