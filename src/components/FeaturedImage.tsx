import { PrimaryButton } from '@elements/Buttons';
import { StackWrapper } from '@elements/Containers';
import { Heading, Overline, PrimaryText } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import Image from 'next/image';
import styled from 'styled-components';

interface FeaturedImageProps {
  overline?: string;
  heading: string;
  primaryText: string;
  imageUrl: string;
  btnText: string;
  onClick: () => void;
  isReversed?: boolean;
  isWide?: boolean;
}

export default function FeaturedImage({
  overline,
  heading,
  primaryText,
  imageUrl,
  btnText,
  onClick,
  isReversed,
  isWide,
}: FeaturedImageProps) {
  const isMobile = useIsMobile();

  return (
    <SectionWrapper
      style={{
        flexDirection: isMobile
          ? 'column-reverse'
          : isReversed
          ? 'row-reverse'
          : 'row',
      }}
    >
      <ContentWrapper>
        <StackWrapper style={{ gap: '1rem' }}>
          {overline && <Overline>{overline}</Overline>}
          <Heading>{heading}</Heading>
          <PrimaryText>{primaryText}</PrimaryText>
          <div>
            <PrimaryButton onClick={onClick}>{btnText}</PrimaryButton>
          </div>
        </StackWrapper>
      </ContentWrapper>

      <Image
        width={isMobile ? (isWide ? 380 : 300) : isWide ? 700 : 450}
        height={isMobile ? 300 : 450}
        alt={heading}
        src={imageUrl}
      />
    </SectionWrapper>
  );
}

export const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 0rem;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 500px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-right: 0;
  }
`;
