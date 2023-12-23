import { GreenSquare } from '@components/common/ImageStepper';
import LongFormText from '@components/common/LongFormText';
import { PrimaryButton } from '@elements/Buttons';
import { SectionWrapper, StackWrapper } from '@elements/Containers';
import { Heading, SmallHeading } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';

interface HowItWorksProps {
  videoUrl: string;
  tutorials: { title: string; description: string; image: string }[];
  btnText: string;
  onClick: () => void;
}

export default function HowItWorks({
  videoUrl,
  tutorials,
  btnText,
  onClick,
}: HowItWorksProps) {
  const isMobile = useIsMobile();
  const playerRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const handlePlay = () => {
    if (playerRef.current) {
      playerRef.current.getInternalPlayer().requestFullscreen();
    }
  };

  return (
    <SectionWrapper
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: isMobile ? 'column-reverse' : 'row',
        gap: isMobile ? '1.5rem' : '5rem',
      }}
    >
      <ReactPlayer
        ref={playerRef}
        onPlay={handlePlay}
        url={videoUrl}
        height={'32rem'}
        width={'50%'}
      />

      <StackWrapper style={{ width: '50%' }}>
        <Heading>How it Works</Heading>
        <div>
          {tutorials?.map(({ title, description }, idx) => (
            <div
              key={idx}
              onClick={() => setActiveIdx(idx)}
              style={{ cursor: 'pointer', marginBottom: '1.5rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <GreenSquare />
                <SmallHeading
                  style={{ color: activeIdx === idx ? '#2A8356' : '#989B9F' }}
                >
                  {title}
                </SmallHeading>
              </div>
              {activeIdx === idx && <LongFormText content={description} />}
            </div>
          ))}
        </div>

        <div>
          <PrimaryButton onClick={onClick}>{btnText}</PrimaryButton>
        </div>
      </StackWrapper>
    </SectionWrapper>
  );
}
