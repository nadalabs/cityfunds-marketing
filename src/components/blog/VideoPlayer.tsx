'use client';
import useIsMobile from '@hooks/useIsMobile';
import { urlForImage } from 'lib/sanity';
import Image from 'next/image';
import { useRef, useState } from 'react';
import ReactPlayer from 'react-player/youtube';

interface VideoPlayerProps {
  video: any;
}

export default function VideoPlayer({ video }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);
  const isMobile = useIsMobile();

  return (
    <>
      {isPlaying ? (
        <div
          style={{
            height: '32rem',
            width: isMobile ? '100%' : '32rem',
            borderRadius: '2rem',
            overflow: 'hidden',
          }}
        >
          <ReactPlayer
            ref={playerRef}
            url={video?.video_url || video?.slug}
            playing={isPlaying}
            controls={true}
            onEnded={() => setIsPlaying(false)}
            height={isMobile ? '16rem' : '32rem'}
            width={isMobile ? '100%' : '32rem'}
          />
        </div>
      ) : (
        <div style={{ position: 'relative' }}>
          <Image
            src={urlForImage(video?.thumbnail || video?.coverImage)}
            alt="Watch Video"
            height={512}
            width={512}
            style={{ borderRadius: '4rem' }}
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
