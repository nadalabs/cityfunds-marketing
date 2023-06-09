import { PrimaryButton } from '@elements/Buttons';
import { Heading, Overline, PrimaryText } from '@elements/Typography';
import Image from 'next/image';
import { styled } from 'styled-components';
import { GreenSquare } from './CarouselStepper';

interface FeaturedImageProps {
  overline?: string;
  heading: string;
  primaryText: string;
  imageUrl: string;
  btnText: string;
  onClick: () => void;
  isReversed?: boolean;
  isShortHeader?: boolean;
  isBorder?: boolean;
}

export default function FeaturedImage({
  overline,
  heading,
  primaryText,
  imageUrl,
  btnText,
  onClick,
  isReversed,
  isShortHeader,
  isBorder,
}: FeaturedImageProps) {
  return (
    <ContentWrapper
      style={{
        boxShadow: isBorder ? '2px 4px 25px rgba(0, 0, 0, 0.1)' : 'none',
        borderRadius: isBorder ? '100px' : 'none',
        padding: isBorder ? '60px' : 0,
      }}
    >
      {!isReversed && (
        <>
          {isBorder ? (
            <LeftImageWrapper
              style={{
                height: '400px',
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 22.38%, rgba(0, 0, 0, 0.144) 44.79%, rgba(0, 0, 0, 0.3915) 73.73%), url(${imageUrl})`,
                borderRadius: '50px',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            />
          ) : (
            <LeftImageWrapper>
              <Image src={imageUrl} alt={heading} fill />
            </LeftImageWrapper>
          )}
        </>
      )}

      <TextWrapper>
        {overline && <Overline>{overline}</Overline>}
        <Heading
          style={{
            maxWidth: isShortHeader ? '400px' : '700px',
            fontSize: isBorder ? '52px' : '64px',
          }}
        >
          {heading}
        </Heading>
        <PrimaryText>{primaryText}</PrimaryText>
        <PrimaryButton onClick={onClick}>{btnText}</PrimaryButton>
      </TextWrapper>

      {isReversed && (
        <FlexWrapper>
          <ImageWrapper>
            <Image src={imageUrl} alt={heading} fill />
          </ImageWrapper>
          <ImageSquare />
        </FlexWrapper>
      )}
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
  width: 500px;
  height: 500px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    height: 350px;
  }
`;

const LeftImageWrapper = styled(ImageWrapper)`
  margin-right: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-right: 0;
  }
`;

const TextWrapper = styled.div`
  width: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

const ImageSquare = styled(GreenSquare)`
  height: 30px;
  width: 30px;
  position: absolute;
  margin: 0;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    height: 350px;
    margin: 0;
  }
`;
