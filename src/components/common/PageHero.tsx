import { PrimaryButton } from '@elements/Buttons';
import { Heading, LargeText } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { urlForImage } from 'lib/sanity';
import Image from 'next/image';
import styled from 'styled-components';

interface PageHeroProps {
  heading: string;
  primaryText: string;
  heroImage?: string;
  btnText?: string;
  onClick?: () => void;
  maxWidth?: number;
}

export default function PageHero({
  heading,
  primaryText,
  heroImage,
  btnText,
  onClick,
  maxWidth,
}: PageHeroProps) {
  const isMobile = useIsMobile();

  return (
    <HeroWrapper>
      <ContentWrapper style={{ width: isMobile ? '100%' : maxWidth }}>
        <Heading style={{ fontSize: isMobile ? '2rem' : '4rem' }}>
          {heading}
        </Heading>
        <LargeText>{primaryText}</LargeText>
        {btnText && (
          <div>
            <PrimaryButton onClick={onClick}>{btnText}</PrimaryButton>
          </div>
        )}
      </ContentWrapper>

      <Image
        width={isMobile ? 300 : 704}
        height={isMobile ? 300 : 560}
        alt={heading}
        src={urlForImage(heroImage).url()}
      />
    </HeroWrapper>
  );
}

export const HeroWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 9.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column-reverse;
    justify-content: center;
    padding: 0 1rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: center;
    padding: 30px;
    margin: 0;
  }
`;
