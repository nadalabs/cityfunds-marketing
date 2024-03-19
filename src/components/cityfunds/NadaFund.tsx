'use client';
import VideoPlayer from '@components/blog/VideoPlayer';
import LongFormText from '@components/common/LongFormText';
import { PrimaryButton } from '@elements/Buttons';
import {
  GridWrapper,
  SectionWrapper,
  StackWrapper,
} from '@elements/Containers';
import { Heading, PrimaryText } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import Link from 'next/link';
import styled from 'styled-components';

interface NadaFundProps {
  feature: { title: string; description: string };
  video: { video_url: string; thumbnail: string };
}

export default function NadaFund({ feature, video }: NadaFundProps) {
  const isMobile = useIsMobile();

  return (
    <SectionWrapper id="nada-fund" $isBackground>
      <GridWrapper>
        <StackWrapper>
          <div>
            <OverlinePill>Exclusive</OverlinePill>
          </div>
          <Heading>{feature?.title}</Heading>
          {isMobile && <VideoPlayer video={video} />}
          <LongFormText content={feature?.description} />

          <Link
            href={`${process.env.NEXT_PUBLIC_WEB_APP_URL}/nada`}
            target="_blank"
          >
            <PrimaryButton>Invest Now</PrimaryButton>
          </Link>
        </StackWrapper>

        {!isMobile && <VideoPlayer video={video} />}
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
