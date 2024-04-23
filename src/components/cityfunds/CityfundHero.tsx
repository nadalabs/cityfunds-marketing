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
import CityfundSlider from '@components/cityfunds/CityfundSlider';
import { ICityfund } from '@utils/models';
import { PrimaryButton } from '@elements/Buttons';
import { usePathname } from 'next/navigation';

interface CityfundHeroProps {
  cityfunds: ICityfund[];
  banner?: {
    text: string;
    link: string;
  };
  logos?: any[];
  feature?: any;
}

export default function CityfundHero({
  cityfunds,
  banner,
  logos,
  feature,
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
          <PrimaryText>
            Unlock real wealth through diversified home equity portfolios.
          </PrimaryText>

          {isHome ? (
            <div>
              <PrimaryButton
                onClick={() =>
                  window.open(process.env.NEXT_PUBLIC_WEB_APP_URL, '_tab')
                }
              >
                Explore Offerings
              </PrimaryButton>
            </div>
          ) : (
            <EmailCapture isHero />
          )}
          <PrimaryText
            style={{
              color: '#2A8356',
              marginTop: isMobile || isHome ? 0 : '-1rem',
            }}
          >
            Invest in minutes - start with as little as $500.
          </PrimaryText>

          {isMobile && (
            <Image
              width={512}
              height={512}
              alt="Own Home Equity In Top Cities"
              src={urlForImage(feature?.image, 512, 512)}
              style={{ alignSelf: 'center' }}
            />
          )}
        </StackWrapper>

        <div style={{ marginTop: '2rem' }}>
          {logos && (
            <LogoSoup
              overline="Featured In"
              logos={isMobile ? logos.slice(0, 4) : logos}
              isStatic={!isHome}
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
