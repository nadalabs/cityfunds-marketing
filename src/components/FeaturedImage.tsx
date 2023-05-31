import { PrimaryButton } from '@elements/Buttons';
import { Heading, Overline, PrimaryText } from '@elements/Typography';
import { EXTERNAL_ROUTES } from '@utils/constants';
import Image from 'next/image';
import { styled } from 'styled-components';

interface FeaturedImageProps {
  overline: string;
  heading: string;
  primaryText: string;
  imageUrl: string;
}

export default function FeaturedImage({
  overline,
  heading,
  primaryText,
  imageUrl,
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
        <PrimaryButton
          onClick={() => window.location.replace(EXTERNAL_ROUTES.WEB_APP)}
        >
          Get Started
        </PrimaryButton>
      </TextWrapper>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 120px;

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
