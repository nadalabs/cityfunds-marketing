'use client';
import LongFormText from '@components/common/LongFormText';
import { PrimaryButton } from '@elements/Buttons';
import { SectionWrapper, StackWrapper } from '@elements/Containers';
import { Heading, Overline } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { IFeature } from '@utils/models';
import { urlForImage } from 'lib/sanity';
import Image from 'next/image';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface FeaturedImageProps {
  feature: IFeature;
  btnText?: string;
  onClick?: () => void;
  overline?: string;
  component?: ReactNode;
  isReversed?: boolean;
  isBackground?: boolean;
  isWide?: boolean;
}

export default function FeaturedImage({
  feature,
  btnText,
  onClick,
  overline,
  component,
  isReversed,
  isBackground,
  isWide,
}: FeaturedImageProps) {
  const isMobile = useIsMobile();

  return (
    <SectionWrapper
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: isMobile
          ? 'column-reverse'
          : isReversed
            ? 'row-reverse'
            : 'row',
        gap: isMobile ? '1.5rem' : '5rem',
      }}
      isBackground={isBackground}
    >
      <ContentWrapper>
        <StackWrapper style={{ gap: '1rem' }}>
          {overline && <Overline>{overline}</Overline>}
          <Heading>{feature?.title}</Heading>
          <LongFormText content={feature?.description} isLarge />
          {component ? (
            component
          ) : (
            <div>
              <PrimaryButton onClick={onClick}>{btnText}</PrimaryButton>
            </div>
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
    </SectionWrapper>
  );
}

export const ContentWrapper = styled.div`
  max-width: 40rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    margin-right: 0;
  }
`;
