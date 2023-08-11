import { GreenSquare } from '@components/common/CarouselStepper';
import { PrimaryButton } from '@elements/Buttons';
import { StackWrapper } from '@elements/Containers';
import { Heading, Overline, PrimaryText } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import Image from 'next/image';
import { styled } from 'styled-components';

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
  isWide?: boolean;
  isShort?: boolean;
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
  isShort,
}: FeaturedImageProps) {
  const isMobile = useIsMobile();

  return (
    <ContentWrapper
      style={{
        boxShadow:
          !isMobile && isBorder ? '2px 4px 25px rgba(0, 0, 0, 0.1)' : 'none',
        borderRadius: isBorder ? '100px' : 'none',
        padding: !isMobile && isBorder ? '60px' : 0,
      }}
    >
      {!isReversed && (
        <>
          {isBorder ? (
            <BorderImageWrapper
              style={{
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 22.38%, rgba(0, 0, 0, 0.144) 44.79%, rgba(0, 0, 0, 0.3915) 73.73%), url(${imageUrl})`,
              }}
            />
          ) : (
            <div>
              <LeftImageWrapper
                style={{
                  height: isShort ? '28rem' : '500px',
                  width: isMobile ? '350px' : '500px',
                }}
              >
                <Image src={imageUrl} alt={heading} fill />
              </LeftImageWrapper>
            </div>
          )}
        </>
      )}

      <StackWrapper>
        {overline && <Overline>{overline}</Overline>}

        <div>
          <Heading
            style={{
              maxWidth: isShortHeader ? '400px' : '700px',
              fontSize: isBorder ? '52px' : '64px',
              lineHeight: isBorder ? '52px' : '64px',
            }}
          >
            {heading}
          </Heading>
          <PrimaryText>{primaryText}</PrimaryText>
        </div>

        <div>
          <PrimaryButton onClick={onClick}>{btnText}</PrimaryButton>
        </div>
      </StackWrapper>

      {isReversed && !isMobile && (
        <FlexWrapper>
          <ImageWrapper>
            <Image src={imageUrl} alt={heading} height={500} width={700} />
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
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    height: 350px !important;
  }
`;

const LeftImageWrapper = styled(ImageWrapper)`
  margin-right: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-right: 0;
  }
`;

const BorderImageWrapper = styled(ImageWrapper)`
  height: 400px;
  border-radius: 50px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 300px;
    margin-right: 0;
    margin-bottom: 1rem;
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
