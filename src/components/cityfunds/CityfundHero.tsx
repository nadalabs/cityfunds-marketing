'use client';
import EmailCapture from '@components/common/EmailCapture';
import HeroBanner from '@components/common/HeroBanner';
import LogoSoup from '@components/marketing/LogoSoup';
import {
  ContentWrapper,
  HeroWrapper,
  StackWrapper,
} from '@elements/Containers';
import { Heading, PrimaryText } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import Image from 'next/image';

interface CityfundHeroProps {
  banner?: {
    text: string;
    link: string;
  };
  logoTitle?: string;
  logos?: any[];
}

export default function CityfundHero({
  banner,
  logoTitle,
  logos,
}: CityfundHeroProps) {
  const isMobile = useIsMobile();

  return (
    <HeroWrapper style={{ marginTop: isMobile ? '3rem' : 0 }}>
      <ContentWrapper>
        <StackWrapper
          style={{
            gap: '1rem',
            alignItems: isMobile ? 'center' : 'flex-start',
          }}
        >
          <Heading style={{ marginBottom: 0 }}>
            Own <span style={{ color: '#2A8356' }}>Home Equity</span> <br /> In
            Top Cities
          </Heading>
          <PrimaryText>
            Unlock real wealth through diversified home equity portfolios.
          </PrimaryText>
          <EmailCapture isHero />
        </StackWrapper>

        {isMobile && (
          <Image
            width={isMobile ? 300 : 512}
            height={isMobile ? 300 : 512}
            alt="Own Home Equity In Top Cities"
            src="/images/mobile-app.png"
          />
        )}

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

      {!isMobile && (
        <Image
          width={isMobile ? 300 : 512}
          height={isMobile ? 300 : 512}
          alt="Own Home Equity In Top Cities"
          src="/images/mobile-app.png"
        />
      )}
    </HeroWrapper>
  );
}
