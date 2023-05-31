import { PrimaryButton } from '@elements/Buttons';
import { Heading, Overline, PrimaryText } from '@elements/Typography';
import Image from 'next/image';
import { styled } from 'styled-components';

interface FeaturedImageProps {
  overline: string;
  heading: string;
  primaryText: string;
  imageUrl: string;
  btnText: string;
  onClick: () => void;
}

export default function FeaturedImage({
  overline,
  heading,
  primaryText,
  imageUrl,
  btnText,
  onClick,
}: FeaturedImageProps) {
  return (
    <ContentWrapper>
      <ImageWrapper>
        <Image src={imageUrl} alt={heading} fill />
      </ImageWrapper>
      <TextWrapper>
        <Overline>{overline}</Overline>
        <Heading>{heading}</Heading>
        <PrimaryText>{primaryText}</PrimaryText>
        <PrimaryButton onClick={onClick}>{btnText}</PrimaryButton>
      </TextWrapper>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 50%;
  height: 500px;
  margin-right: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    margin-right: 0;
  }
`;

const TextWrapper = styled.div`
  width: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;
