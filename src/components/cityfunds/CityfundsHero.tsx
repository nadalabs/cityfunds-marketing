import CityfundSlider from '@components/cityfunds/CityfundSlider';
import LogoSoup from '@components/marketing/LogoSoup';
import { PrimaryButton } from '@elements/Buttons';
import { StackWrapper } from '@elements/Containers';
import { Heading, LargeText } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { ICityfund } from '@utils/models';
import styled from 'styled-components';

interface PageHeroProps {
  heading: string;
  primaryText: string;
  cityfunds: ICityfund[];
  btnText: string;
  onClick: () => void;
  logos: any[];
  isBanner?: boolean;
}

export default function PageHero({
  heading,
  primaryText,
  cityfunds,
  btnText,
  onClick,
  logos,
  isBanner,
}: PageHeroProps) {
  const isMobile = useIsMobile();

  return (
    <HeroWrapper>
      <ContentWrapper>
        <StackWrapper style={{ gap: '1rem' }}>
          <Heading style={{ fontSize: isMobile ? '2rem' : '4rem' }}>
            {heading}
          </Heading>
          <LargeText>{primaryText}</LargeText>
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
      <CityfundSlider cityfunds={cityfunds} />
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
    padding: 10rem 1rem 0 1rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
  max-width: 36rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    text-align: center;
    padding: 2rem;
    margin: 0;
  }
`;
