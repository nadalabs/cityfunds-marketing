import { GreenSquare } from '@components/common/ImageStepper';
import LongFormText from '@components/common/LongFormText';
import { PrimaryButton } from '@elements/Buttons';
import { FlexWrapper, SectionWrapper } from '@elements/Containers';
import { Heading, SmallHeading } from '@elements/Typography';
import { useRef } from 'react';
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
  const playerRef = useRef(null);

  const handlePlay = () => {
    if (playerRef.current) {
      playerRef.current.getInternalPlayer().requestFullscreen();
    }
  };

  return (
    <SectionWrapper>
      <FlexWrapper>
        <ReactPlayer
          ref={playerRef}
          onPlay={handlePlay}
          url={videoUrl}
          height={'32rem'}
          width={'50%'}
          style={{ borderRadius: '5rem' }}
        />

        <div>
          <Heading>How it Works</Heading>
          {tutorials?.map(({ title, description }, jdx) => (
            <div
              key={jdx}
              onClick={() => {}}
              style={{ cursor: 'pointer', marginBottom: '1.5rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <GreenSquare />
                <SmallHeading>{title}</SmallHeading>
              </div>
              <LongFormText content={description} />
            </div>
          ))}
          <PrimaryButton onClick={onClick}>{btnText}</PrimaryButton>
        </div>
      </FlexWrapper>
    </SectionWrapper>
  );
}
