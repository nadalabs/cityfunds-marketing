import AssetTicker from '@components/AssetTicker';
import { GreenSquare } from '@components/CarouselStepper';
import { CardWrapper, SliderWrapper } from '@elements/Containers';
import { Heading, PrimaryText } from '@elements/Typography';
import { EXTERNAL_ROUTES } from '@utils/constants';
import { styled } from 'styled-components';

interface CardSliderProps {
  heading: string;
  primaryText?: string;
  cards: {
    name: string;
    cardImage: string;
    sharePrice?: number;
    appreciation?: number;
    totalAssets?: number;
    isSmallText?: boolean;
  }[];
}

export default function CardSlider({
  heading,
  primaryText,
  cards,
}: CardSliderProps) {
  return (
    <SliderWrapper>
      <HeadingWrapper>
        <Heading>{heading}</Heading>
        {primaryText && <PrimaryText>{primaryText}</PrimaryText>}
      </HeadingWrapper>
      <div style={{ display: 'flex', overflowX: 'scroll' }}>
        {cards?.map(
          ({ name, cardImage, sharePrice, appreciation, totalAssets }, idx) => (
            <div key={idx}>
              <CardWrapper
                onClick={() => window.location.replace(EXTERNAL_ROUTES.WEB_APP)}
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'flex-end',
                  background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 39.06%, rgba(0, 0, 0, 0.22) 67.71%, rgba(0, 0, 0, 0.40) 95.83%), url(${cardImage}), lightgray 50% / cover no-repeat`,
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                    <Heading
                      style={{
                        color: 'white',
                        marginBottom: '8px',
                      }}
                    >
                      {name}
                    </Heading>
                    <GreenSquare
                      style={{
                        height: '16px',
                        width: '16px',
                        marginLeft: '8px',
                        marginBottom: '1rem',
                      }}
                    />
                  </div>

                  {sharePrice && (
                    <AssetTicker
                      sharePrice={sharePrice}
                      appreciation={appreciation}
                      totalAssets={totalAssets}
                    />
                  )}
                </div>
              </CardWrapper>
            </div>
          )
        )}
      </div>
    </SliderWrapper>
  );
}

export const HeadingWrapper = styled.div`
  max-width: 1100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;
