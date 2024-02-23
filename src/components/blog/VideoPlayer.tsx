'use client';
import ReactPlayer from 'react-player/youtube';

interface VideoPlayerProps {
  media: any;
}

export default function VideoPlayer({ media }: VideoPlayerProps) {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ReactPlayer
        controls={true}
        url={media?.link}
        height={'32rem'}
        width={'50rem'}
      />
    </div>
  );
}
