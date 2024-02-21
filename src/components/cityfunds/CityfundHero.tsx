'use client';
import EmailCapture from '@components/common/EmailCapture';
import HeroBanner from '@components/common/HeroBanner';
import { ContentWrapper, HeroWrapper } from '@components/common/PageHero';
import LogoSoup from '@components/marketing/LogoSoup';
import { StackWrapper } from '@elements/Containers';
import { Heading, PrimaryText } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { IFeature } from '@utils/models';
import Image from 'next/image';

interface CityfundHeroProps {
  feature: IFeature;
  banner?: {
    text: string;
    link: string;
  };
  logoTitle?: string;
  logos?: any[];
}

export default function CityfundHero({
  feature,
  banner,
  logoTitle,
  logos,
}: CityfundHeroProps) {
  const isMobile = useIsMobile();

  return (
    <HeroWrapper>
      <ContentWrapper>
        <StackWrapper style={{ gap: '1rem' }}>
          <Heading style={{ marginBottom: 0 }}>
            Own <span style={{ color: '#2A8356' }}>Home Equity</span> <br /> In
            Top Cities
          </Heading>
          <PrimaryText>
            Unlock real wealth through diversified home equity portfolios.
          </PrimaryText>
          <EmailCapture formName="email" isHero />
        </StackWrapper>

        <div>
          {logos && (
            <LogoSoup
              overline={logoTitle}
              logos={isMobile ? logos.slice(0, 4) : logos}
              isHero
            />
          )}
          {banner && (
            <HeroBanner primaryText={banner?.text} link={banner?.link} />
          )}
        </div>
      </ContentWrapper>

      <Image
        width={isMobile ? 300 : 512}
        height={isMobile ? 300 : 512}
        alt={feature?.title}
        src="/images/mobile-app.png"
      />
    </HeroWrapper>
  );
}
