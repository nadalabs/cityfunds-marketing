'use client';
import LongFormText from '@components/common/LongFormText';
import { PrimaryButton } from '@elements/Buttons';
import {
  GridWrapper,
  SectionWrapper,
  StackWrapper,
} from '@elements/Containers';
import { Heading, PrimaryText } from '@elements/Typography';
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

  function renderVideo() {
    return (
      <>
        {isPlaying ? (
          <div
            style={{
              width: '100%',
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
              alt="Nada Offering"
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
      </>
    );
  }

  return (
    <SectionWrapper id="nada-fund" $isBackground>
      <GridWrapper>
        <StackWrapper>
          <div>
            <OverlinePill>Exclusive</OverlinePill>
          </div>
          <Heading>{feature?.title}</Heading>
          {isMobile && renderVideo()}
          <LongFormText content={feature?.description} />

          <Link href={'/nada'}>
            <PrimaryButton>Invest Now</PrimaryButton>
          </Link>
        </StackWrapper>

        {!isMobile && renderVideo()}
      </GridWrapper>
    </SectionWrapper>
  );
}

const OverlinePill = styled(PrimaryText)`
  display: inline-flex;
  color: white;
  font-weight: 600;
  background: black;
  padding: 0.2rem 0.4rem;
  border-radius: 0.5rem;
  text-transform: uppercase;
`;
