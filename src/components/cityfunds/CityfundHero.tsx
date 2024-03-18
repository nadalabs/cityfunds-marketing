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
import { urlForImage } from 'lib/sanity';
import Image from 'next/image';

interface CityfundHeroProps {
  banner?: {
    text: string;
    link: string;
  };
  logoTitle?: string;
  logos?: any[];
  feature?: any;
}

export default function CityfundHero({
  banner,
  logoTitle,
  logos,
  feature,
}: CityfundHeroProps) {
  const isMobile = useIsMobile();

  return (
    <HeroWrapper style={{ marginTop: isMobile ? '2rem' : 0 }}>
      <ContentWrapper>
        <StackWrapper style={{ gap: '1rem' }}>
          <Heading style={{ marginBottom: 0 }}>
            Own <span style={{ color: '#2A8356' }}>Home Equity</span> <br /> In
            Top Cities
          </Heading>
          <PrimaryText>
            Unlock real wealth through diversified home equity portfolios.
          </PrimaryText>

          {isMobile && (
            <Image
              width={isMobile ? 300 : 512}
              height={isMobile ? 300 : 512}
              alt="Own Home Equity In Top Cities"
              src={urlForImage(feature?.image, 512, 512)}
              style={{ alignSelf: 'center' }}
            />
          )}
          <EmailCapture isHero />
        </StackWrapper>

        <div style={{ marginTop: '2rem' }}>
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
          src={urlForImage(feature?.image, 512, 512)}
        />
      )}
    </HeroWrapper>
  );
}
