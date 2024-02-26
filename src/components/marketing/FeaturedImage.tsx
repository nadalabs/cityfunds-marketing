'use client';
import LongFormText from '@components/common/LongFormText';
import { PrimaryButton } from '@elements/Buttons';
import {
  GridWrapper,
  SectionWrapper,
  StackWrapper,
} from '@elements/Containers';
import { Heading, Overline } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { IFeature } from '@utils/models';
import { urlForImage } from 'lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface FeaturedImageProps {
  feature: IFeature;
  btnText?: string;
  link?: string;
  overline?: string;
  component?: ReactNode;
  isReversed?: boolean;
  isBackground?: boolean;
  isWide?: boolean;
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
}: FeaturedImageProps) {
  const isMobile = useIsMobile();

  return (
    <SectionWrapper $isBackground={isBackground}>
      <GridWrapper>
        <ContentWrapper>
          <StackWrapper style={{ gap: '1rem' }}>
            {overline && <Overline>{overline}</Overline>}
            <Heading>{feature?.title}</Heading>
            <LongFormText content={feature?.description} isLarge />
            {component ? (
              component
            ) : (
              <Link href={link} target="_blank">
                <PrimaryButton>{btnText}</PrimaryButton>
              </Link>
            )}
          </StackWrapper>
        </ContentWrapper>

        <Image
          style={{ borderRadius: '2rem' }}
          width={isMobile ? 300 : 560}
          height={isMobile ? 300 : 560}
          alt={feature?.title}
          src={
            isWide
              ? urlForImage(feature?.image)
              : urlForImage(feature?.image, 560, 560)
          }
        />
      </GridWrapper>
    </SectionWrapper>
  );
}

export const ContentWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    margin-right: 0;
  }
`;
