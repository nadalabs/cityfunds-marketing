import CityfundSlider from '@components/cityfunds/CityfundSlider';
import LogoSoup from '@components/marketing/LogoSoup';
import { PrimaryButton } from '@elements/Buttons';
import { Heading, LargeText } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { ICityfund } from '@utils/models';
import styled from 'styled-components';

interface PageHeroProps {
  heading: string;
  primaryText: string;
  cityfunds?: ICityfund[];
  heroImage?: string;
  btnText?: string;
  onClick?: () => void;
  logos?: any[];
  isBanner?: boolean;
  maxWidth?: number;
}

export default function PageHero({
  heading,
  primaryText,
  cityfunds,
  heroImage,
  btnText,
  onClick,
  logos,
  isBanner,
  maxWidth,
}: PageHeroProps) {
  const isMobile = useIsMobile();

  return (
    <HeroWrapper>
      <ContentWrapper style={{ width: maxWidth }}>
        <Heading style={{ fontSize: isMobile ? '2rem' : '4rem' }}>
          {heading}
        </Heading>
        <LargeText>{primaryText}</LargeText>
        <div>
          <PrimaryButton onClick={onClick}>{btnText}</PrimaryButton>
        </div>

        {logos && (
          <LogoSoup
            overline="Featured In"
            logos={isMobile ? logos.slice(0, 4) : logos}
            isHero
          />
        )}
      </ContentWrapper>
      {cityfunds && <CityfundSlider cityfunds={cityfunds} />}
    </HeroWrapper>
  );
}

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 9.25rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: center;
    padding: 30px;
    margin: 0;
  }
`;
