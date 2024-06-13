'use client';
import EmailCapture from '@components/common/EmailCapture';
import HeroBanner from '@components/common/HeroBanner';
import LogoSoup from '@components/marketing/LogoSoup';
import {
  ContentWrapper,
  HeroWrapper,
  StackWrapper,
} from '@elements/Containers';
import { Heading, LargeText } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { urlForImage } from 'lib/sanity';
import Image from 'next/image';
import CityfundSlider from '@components/cityfunds/CityfundSlider';
import { ICityfund, IHero } from '@utils/models';
import { usePathname } from 'next/navigation';
import LongFormText from '@components/common/LongFormText';

interface CityfundHeroProps {
  cityfunds: ICityfund[];
  hero: IHero;
  banner?: {
    text: string;
    link: string;
  };
  logos?: any[];
}

export default function CityfundHero({
  cityfunds,
  banner,
  logos,
  hero,
}: CityfundHeroProps) {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <HeroWrapper
      style={{ gap: isMobile ? 0 : '8rem', marginTop: isMobile ? '1.5rem' : 0 }}
    >
      <ContentWrapper style={{ maxWidth: 'inherit' }}>
        <StackWrapper
          style={{ textAlign: isMobile ? 'center' : 'left', gap: '1rem' }}
        >
          <Heading style={{ marginBottom: 0 }}>
            Own <span style={{ color: '#2A8356' }}>Home Equity</span> <br /> In
            Top Cities
          </Heading>
          <LongFormText content={hero?.description} isLarge />

          <EmailCapture isHero />
          <LargeText style={{ color: '#2A8356' }}>
            {hero?.call_to_action}
          </LargeText>

          {isMobile && (
            <Image
              width={512}
              height={512}
              alt="Own Home Equity In Top Cities"
              src={urlForImage(hero?.image, 512, 512)}
              style={{ alignSelf: 'center' }}
            />
          )}
        </StackWrapper>

        <div style={{ marginTop: '2rem' }}>
          {logos && (
            <LogoSoup
              overline="Featured In"
              logos={isMobile ? logos.slice(0, 4) : logos}
              isHero
            />
          )}
          {banner && (
            <HeroBanner
              primaryText={banner?.text}
              link={banner?.link}
              isStatic={!isHome}
            />
          )}
        </div>
      </ContentWrapper>

      {!isMobile && <CityfundSlider cityfunds={cityfunds} isStatic={!isHome} />}
    </HeroWrapper>
  );
}
