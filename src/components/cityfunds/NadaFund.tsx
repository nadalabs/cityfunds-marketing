'use client';
import LongFormText from '@components/common/LongFormText';
import { PrimaryButton } from '@elements/Buttons';
import { SectionWrapper, StackWrapper } from '@elements/Containers';
import { Heading, SmallHeading } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { urlForImage } from 'lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

interface NadaFundProps {
  feature: { title: string; description: string };
  video: { video_url: string; thumbnail: string };
}

export default function NadaFund({ feature, video }: NadaFundProps) {
  const isMobile = useIsMobile();
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <SectionWrapper
      id="nada-fund"
      $isBackground
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '1.5rem' : '5rem',
      }}
    >
      <StackWrapper style={{ width: isMobile ? '100%' : '50%' }}>
        <Heading>{feature?.title}</Heading>
        <LongFormText content={feature?.description} />

        <Link href={'/nada'}>
          <PrimaryButton>Invest Now</PrimaryButton>
        </Link>
      </StackWrapper>
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
            style={{ borderRadius: '5rem' }}
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
