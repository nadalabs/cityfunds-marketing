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

interface HowItWorksProps {
  title?: string;
  video?: { video_url: string; thumbnail: string };
  tutorials: { title: string; description: string; image?: string }[];
  btnText: string;
  link: string;
  isReversed?: boolean;
}

export default function HowItWorks({
  title,
  video,
  tutorials,
  btnText,
  link,
  isReversed,
}: HowItWorksProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <SectionWrapper id="how-it-works">
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

        <ContentWrapper>
          <Heading style={{ marginBottom: '1.5rem' }}>
            {title ? title : 'How it Works'}
          </Heading>

          <div>
            {tutorials?.map(({ title, description }, idx) => (
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
                  {activeIdx === idx && <LongFormText content={description} />}
                </FadeWrapper>
              </div>
            ))}
          </div>

          <Link href={link} target="_blank">
            <PrimaryButton>{btnText}</PrimaryButton>
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
