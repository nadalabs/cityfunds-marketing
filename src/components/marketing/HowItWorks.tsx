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
import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

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
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '1.5rem' : '5rem',
      }}
    >
      <ReactPlayer
        ref={playerRef}
        onPlay={handlePlay}
        url={videoUrl}
        height={isMobile ? '16rem' : '32rem'}
        width={isMobile ? '100%' : '50%'}
      />

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
                <HoverHeading isActive={activeIdx === idx}>
                  {title}
                </HoverHeading>
              </div>
              <FadeWrapper
                isActive={activeIdx === idx}
                style={{ marginLeft: '1.5rem' }}
              >
                {activeIdx === idx && <LongFormText content={description} />}
              </FadeWrapper>
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

const HoverHeading = styled(SmallHeading)<{ isActive?: boolean }>`
  transition: ${({ theme }) => theme.transitions.ease};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : '#30303080'};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
