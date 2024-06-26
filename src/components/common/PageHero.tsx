'use client';
import LongFormText from '@components/common/LongFormText';
import { PrimaryButton } from '@elements/Buttons';
import {
  ContentWrapper,
  GridWrapper,
  HeroWrapper,
  StackWrapper,
} from '@elements/Containers';
import { LargeText } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { IHero } from '@utils/models';
import { urlForImage } from 'lib/sanity';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';

interface PageHeroProps {
  hero: IHero;
  btnText?: string;
  link?: string;
}

export default function PageHero({ hero, btnText, link }: PageHeroProps) {
  const isMobile = useIsMobile();

  return (
    <HeroWrapper
      style={{
        alignItems: isMobile ? 'flex-start' : 'center',
        marginTop: isMobile ? '1.5rem' : 0,
      }}
    >
      <GridWrapper>
        <ContentWrapper>
          <StackWrapper style={{ gap: '1rem' }}>
            {isMobile && (
              <ImageWrapper
                width={512}
                height={512}
                alt="Cityfunds"
                src={urlForImage(hero?.image, 512, 512)}
              />
            )}

            <LongFormText content={hero?.title} />
            <LongFormText content={hero?.description} isLarge />
            <LargeText style={{ color: '#2A8356' }}>
              {hero?.call_to_action}
            </LargeText>

            {btnText && (
              <Link href={link} target="_blank">
                <PrimaryButton>{btnText}</PrimaryButton>
              </Link>
            )}
          </StackWrapper>
        </ContentWrapper>

        {!isMobile && (
          <ImageWrapper
            width={512}
            height={512}
            alt="Cityfunds"
            src={urlForImage(hero?.image, 512, 512)}
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
