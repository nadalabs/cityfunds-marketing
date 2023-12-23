import HeroBanner from '@components/common/HeroBanner';
import LongFormText from '@components/common/LongFormText';
import LogoSoup from '@components/marketing/LogoSoup';
import { PrimaryButton } from '@elements/Buttons';
import { FlexWrapper, StackWrapper } from '@elements/Containers';
import { Heading } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { urlForImage } from 'lib/sanity';
import styled from 'styled-components';

interface NadaHeroProps {
  feature: any;
  btnText?: string;
  onClick?: () => void;
  logoTitle?: string;
  logos?: any[];
}

export default function NadaHero({
  feature,
  btnText,
  onClick,
  logoTitle,
  logos,
}: NadaHeroProps) {
  const isMobile = useIsMobile();

  return (
    <HeroWrapper>
      <FlexWrapper style={{ gap: isMobile ? 0 : '4rem' }}>
        <ContentWrapper>
          <StackWrapper style={{ gap: '1rem' }}>
            <HeroBanner primaryText="🏆 Voted Benzinga’s Best Alternative Investment Platform " />
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

        <ImageWrapper
          width={isMobile ? 300 : 560}
          height={isMobile ? 300 : 560}
          alt={feature?.title}
          src={urlForImage(feature?.image, 560, 560)}
        />
      </FlexWrapper>
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

const ImageWrapper = styled.img`
  border-radius: 2rem;
  box-shadow: 1.5px 1.5px 25px 0px rgba(0, 0, 0, 0.05);
`;
