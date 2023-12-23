import CityfundSlider from '@components/cityfunds/CityfundSlider';
import HeroBanner from '@components/common/HeroBanner';
import LongFormText from '@components/common/LongFormText';
import LogoSoup from '@components/marketing/LogoSoup';
import { PrimaryButton } from '@elements/Buttons';
import { StackWrapper } from '@elements/Containers';
import { Heading } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { ICityfund } from '@utils/models';
import { urlForImage } from 'lib/sanity';
import styled from 'styled-components';

interface PageHeroProps {
  feature: any;
  bannerText?: string;
  btnText?: string;
  onClick?: () => void;
  logoTitle?: string;
  logos?: any[];
  cityfunds?: ICityfund[];
}

export default function PageHero({
  feature,
  bannerText,
  btnText,
  onClick,
  logoTitle,
  logos,
  cityfunds,
}: PageHeroProps) {
  const isMobile = useIsMobile();

  return (
    <HeroWrapper>
      <ContentWrapper>
        <StackWrapper style={{ gap: '1rem' }}>
          {bannerText && <HeroBanner primaryText={bannerText} />}
          <Heading>{feature?.title}</Heading>
          <LongFormText content={feature?.description} isLarge />
          {btnText && (
            <div>
              <PrimaryButton onClick={onClick}>{btnText}</PrimaryButton>
            </div>
          )}
        </StackWrapper>

        {logos && (
          <LogoSoup
            overline={logoTitle}
            logos={isMobile ? logos.slice(0, 4) : logos}
            isHero
          />
        )}
      </ContentWrapper>

      {feature?.image && (
        <ImageWrapper
          width={isMobile ? 300 : 560}
          height={isMobile ? 300 : 560}
          alt={feature?.title}
          src={urlForImage(feature?.image, 560, 560)}
        />
      )}
      {cityfunds && <CityfundSlider cityfunds={cityfunds} />}
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
    padding: 8rem 1rem 0 1rem;
    gap: 1rem;
    height: 100%;
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
    padding: 1rem;
    margin: 0;
  }
`;

const ImageWrapper = styled.img`
  border-radius: 2rem;
  box-shadow: 1.5px 1.5px 25px 0px rgba(0, 0, 0, 0.05);
`;
