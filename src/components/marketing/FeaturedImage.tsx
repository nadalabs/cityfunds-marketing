'use client';
import CityfundSlider from '@components/cityfunds/CityfundSlider';
import LongFormText from '@components/common/LongFormText';
import { PrimaryButton } from '@elements/Buttons';
import {
  ContentWrapper,
  GridWrapper,
  SectionWrapper,
  StackWrapper,
} from '@elements/Containers';
import { Heading, Overline } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { ICityfund, IFeature } from '@utils/models';
import { urlForImage } from 'lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface FeaturedImageProps {
  feature: IFeature;
  btnText?: string;
  link?: string;
  overline?: string;
  component?: ReactNode;
  isReversed?: boolean;
  isBackground?: boolean;
  isWide?: boolean;
  isSmall?: boolean;
  cityfunds?: ICityfund[];
}

export default function FeaturedImage({
  feature,
  btnText,
  link,
  overline,
  component,
  isReversed,
  isBackground,
  isWide,
  isSmall,
  cityfunds,
}: FeaturedImageProps) {
  const isMobile = useIsMobile();

  function renderImage() {
    if (!!link) {
      return (
        <Link href={link} target="_blank">
          <Image
            style={{ borderRadius: '2rem', alignSelf: 'flex-end' }}
            width={isWide ? 700 : 512}
            height={512}
            alt={feature?.title}
            src={
              isWide
                ? urlForImage(feature?.image)
                : urlForImage(feature?.image, 512, 512)
            }
          />
        </Link>
      );
    } else {
      return (
        <Image
          style={{ borderRadius: '2rem', alignSelf: 'flex-end' }}
          width={isWide ? 700 : 512}
          height={512}
          alt={feature?.title}
          src={
            isWide
              ? urlForImage(feature?.image)
              : urlForImage(feature?.image, 512, 512)
          }
        />
      );
    }
  }

  return (
    <SectionWrapper $isBackground={isBackground}>
      <GridWrapper>
        {(isMobile || isReversed) && !cityfunds && <div>{renderImage()}</div>}
        <ContentWrapper>
          <StackWrapper style={{ gap: '1rem' }}>
            {overline && <Overline>{overline}</Overline>}
            <Heading style={{ width: isSmall && !isMobile ? '70%' : '100%' }}>
              {feature?.title}
            </Heading>
            <LongFormText
              content={feature?.description}
              isLarge={!isSmall ? true : false}
            />
            {component && component}
            {link && (
              <Link href={link} target="_blank">
                <PrimaryButton>{btnText}</PrimaryButton>
              </Link>
            )}
          </StackWrapper>
        </ContentWrapper>

        {!isMobile && !isReversed && !cityfunds && renderImage()}
        {!isMobile && cityfunds && (
          <CityfundSlider
            cityfunds={cityfunds}
            isStatic={false}
            isWide={true}
          />
        )}
      </GridWrapper>
    </SectionWrapper>
  );
}
