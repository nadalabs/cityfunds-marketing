'use client';
import VideoPlayer from '@components/common/VideoPlayer';
import { GreenSquare } from '@components/common/ImageStepper';
import LongFormText from '@components/common/LongFormText';
import { PrimaryButton } from '@elements/Buttons';
import {
  ContentWrapper,
  FadeWrapper,
  GridWrapper,
  SectionWrapper,
} from '@elements/Containers';
import { Heading, SmallHeading } from '@elements/Typography';
import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { urlForImage } from 'lib/sanity';
import useIsMobile from '@hooks/useIsMobile';

interface HowItWorksProps {
  title?: string;
  video?: { video_url: string; thumbnail: string };
  tutorials: {
    title: string;
    description: string;
    image?: string;
    button_text: string;
    button_link?: string;
  }[];
  btnText?: string;
  link?: string;
  isReversed?: boolean;
  scrollId?: string;
}

export default function HowItWorks({
  title,
  video,
  tutorials,
  btnText,
  link,
  isReversed,
  scrollId,
}: HowItWorksProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const isMobile = useIsMobile();

  return (
    <SectionWrapper id={scrollId}>
      <GridWrapper>
        {!isReversed && (
          <>
            {video ? (
              <VideoPlayer video={video} />
            ) : (
              <Image
                width={512}
                height={512}
                src={urlForImage(tutorials?.[activeIdx]?.image)}
                alt={tutorials?.[activeIdx]?.title}
                style={{ borderRadius: '2rem' }}
              />
            )}
          </>
        )}

        <ContentWrapper style={{ width: isMobile ? '100%' : '36rem' }}>
          <Heading style={{ marginBottom: '1.5rem' }}>
            {title ? title : 'How it Works'}
          </Heading>

          <div>
            {tutorials?.map(
              ({ title, description, button_text, button_link }, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  style={{ cursor: 'pointer', marginBottom: '1.5rem' }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '1.5rem',
                    }}
                  >
                    <GreenSquare $isActive={activeIdx === idx} />
                    <HoverHeading $isActive={activeIdx === idx}>
                      {title}
                    </HoverHeading>
                  </div>
                  <FadeWrapper
                    $isActive={activeIdx === idx}
                    style={{ marginLeft: '1.5rem' }}
                  >
                    {activeIdx === idx && (
                      <LongFormText content={description} />
                    )}
                  </FadeWrapper>
                </div>
              )
            )}
          </div>

          <Link
            href={
              tutorials?.[activeIdx]?.button_link
                ? tutorials?.[activeIdx]?.button_link
                : link
            }
            target="_blank"
          >
            <PrimaryButton>
              {tutorials?.[activeIdx]?.button_text
                ? tutorials?.[activeIdx]?.button_text
                : btnText}
            </PrimaryButton>
          </Link>
        </ContentWrapper>

        {isReversed && (
          <>
            {video ? (
              <VideoPlayer video={video} />
            ) : (
              <Image
                width={512}
                height={512}
                src={urlForImage(tutorials?.[activeIdx]?.image)}
                alt={tutorials?.[activeIdx]?.title}
                style={{ borderRadius: '2rem' }}
              />
            )}
          </>
        )}
      </GridWrapper>
    </SectionWrapper>
  );
}

const HoverHeading = styled(SmallHeading)<{ $isActive?: boolean }>`
  transition: ${({ theme }) => theme.transitions.ease};
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.primary : '#30303080'};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
