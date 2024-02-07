'use client';
import { GreenSquare } from '@components/common/ImageStepper';
import LongFormText from '@components/common/LongFormText';
import { PrimaryButton } from '@elements/Buttons';
import {
  FadeWrapper,
  SectionWrapper,
  StackWrapper,
} from '@elements/Containers';
import { Heading, SmallHeading } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { urlForImage } from 'lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

interface HowItWorksProps {
  video: { video_url: string; thumbnail: string };
  tutorials: { title: string; description: string; image: string }[];
  btnText: string;
  link: string;
}

export default function HowItWorks({
  video,
  tutorials,
  btnText,
  link,
}: HowItWorksProps) {
  const isMobile = useIsMobile();
  const playerRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <SectionWrapper
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '1.5rem' : '5rem',
      }}
    >
      {isPlaying ? (
        <div
          style={{
            height: '32rem',
            width: isMobile ? '100%' : '50%',
            borderRadius: '2rem',
            overflow: 'hidden',
          }}
        >
          <ReactPlayer
            ref={playerRef}
            url={video?.video_url}
            playing={isPlaying}
            controls={true}
            onEnded={() => setIsPlaying(false)}
            height={isMobile ? '16rem' : '32rem'}
            width={isMobile ? '100%' : '100%'}
          />
        </div>
      ) : (
        <div style={{ position: 'relative' }}>
          <Image
            src={urlForImage(video?.thumbnail)}
            alt="How it Works"
            height={isMobile ? '300' : '512'}
            width={isMobile ? '300' : '512'}
          />
          <Image
            onClick={() => setIsPlaying(true)}
            src="/icons/play-button.svg"
            alt="Play button"
            width={120}
            height={120}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              cursor: 'pointer',
            }}
          />
        </div>
      )}

      <StackWrapper style={{ width: isMobile ? '100%' : '50%' }}>
        <Heading>How it Works</Heading>
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
                <GreenSquare />
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
      </StackWrapper>
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
