'use client';
import ReactPlayer from 'react-player/youtube';

interface BlogVideoProps {
  media: any;
}

export default function BlogVideo({ media }: BlogVideoProps) {
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
        a
        width={'50rem'}
      />
    </div>
  );
}
