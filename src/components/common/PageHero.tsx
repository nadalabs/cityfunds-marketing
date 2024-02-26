'use client';
import CityfundSlider from '@components/cityfunds/CityfundSlider';
import HeroBanner from '@components/common/HeroBanner';
import LongFormText from '@components/common/LongFormText';
import LogoSoup from '@components/marketing/LogoSoup';
import { PrimaryButton } from '@elements/Buttons';
import {
  ContentWrapper,
  GridWrapper,
  HeroWrapper,
  StackWrapper,
} from '@elements/Containers';
import { Heading } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { ICityfund, IFeature } from '@utils/models';
import { urlForImage } from 'lib/sanity';
import Link from 'next/link';
import styled from 'styled-components';

interface PageHeroProps {
  feature: IFeature;
  banner?: {
    text: string;
    link: string;
  };
  btnText?: string;
  link?: string;
  logoTitle?: string;
  logos?: any[];
  cityfunds?: ICityfund[];
}

export default function PageHero({
  feature,
  banner,
  btnText,
  link,
  logoTitle,
  logos,
  cityfunds,
}: PageHeroProps) {
  const isMobile = useIsMobile();

  return (
    <HeroWrapper>
      <GridWrapper>
        <ContentWrapper>
          <StackWrapper style={{ gap: '1rem' }}>
            {banner && (
              <HeroBanner primaryText={banner?.text} link={banner?.link} />
            )}
            <Heading>{feature?.title}</Heading>
            <LongFormText content={feature?.description} isLarge />
            {btnText && (
              <Link href={link} target="_blank">
                <PrimaryButton>{btnText}</PrimaryButton>
              </Link>
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
            width={isMobile ? 300 : 512}
            height={isMobile ? 300 : 512}
            alt={feature?.title}
            src={urlForImage(feature?.image, 512, 512)}
          />
        )}
        {cityfunds && <CityfundSlider cityfunds={cityfunds} />}
      </GridWrapper>
    </HeroWrapper>
  );
}

const ImageWrapper = styled.img`
  border-radius: 2rem;
  box-shadow: 1.5px 1.5px 25px 0px rgba(0, 0, 0, 0.05);
`;
