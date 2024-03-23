'use client';
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
import { IFeature } from '@utils/models';
import { urlForImage } from 'lib/sanity';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';

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
}

export default function PageHero({
  feature,
  banner,
  btnText,
  link,
  logoTitle,
  logos,
}: PageHeroProps) {
  const isMobile = useIsMobile();

  return (
    <HeroWrapper>
      <GridWrapper>
        <ContentWrapper>
          {isMobile && (
            <ImageWrapper
              width={512}
              height={512}
              alt={feature?.title}
              src={urlForImage(feature?.image, 512, 512)}
            />
          )}

          <StackWrapper
            style={{
              gap: '1rem',
              marginBottom: '4rem',
            }}
          >
            <Heading>{feature?.title}</Heading>
            <LongFormText content={feature?.description} isLarge />

            {isMobile && (
              <Image
                width={512}
                height={512}
                alt="Own Home Equity In Top Cities"
                src={urlForImage(feature?.image, 512, 512)}
              />
            )}

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
          {banner && (
            <HeroBanner primaryText={banner?.text} link={banner?.link} />
          )}
        </ContentWrapper>

        {!isMobile && (
          <ImageWrapper
            width={512}
            height={512}
            alt={feature?.title}
            src={urlForImage(feature?.image, 512, 512)}
          />
        )}
      </GridWrapper>
    </HeroWrapper>
  );
}

const ImageWrapper = styled(Image)`
  border-radius: 2rem;
  box-shadow: 1.5px 1.5px 25px 0px rgba(0, 0, 0, 0.05);
`;
