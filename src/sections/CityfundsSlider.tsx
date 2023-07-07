import AssetTicker from '@components/AssetTicker';
import { GreenSquare } from '@components/CarouselStepper';
import { CardWrapper, SliderWrapper } from '@elements/Containers';
import { Heading, Overline, PrimaryText } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { EXTERNAL_ROUTES } from '@utils/constants';
import { styled } from 'styled-components';

interface CityfundsSliderProps {
  heading: string;
  primaryText?: string;
  overline?: string;
  cards: {
    name: string;
    cardImage: string;
    sharePrice?: number;
    appreciation?: number;
    totalAssets?: number;
    isSmallText?: boolean;
  }[];
}

export default function CityfundsSlider({
  heading,
  primaryText,
  overline,
  cards,
}: CityfundsSliderProps) {
  const isMobile = useIsMobile();

  return (
    <SliderWrapper>
      <HeadingWrapper>
        {overline && <Overline>{overline}</Overline>}
        <Heading>{heading}</Heading>
        {primaryText && <PrimaryText>{primaryText}</PrimaryText>}
      </HeadingWrapper>
      <div style={{ display: 'flex', overflowX: 'scroll' }}>
        {cards?.map(
          (
            {
              name,
              cardImage,
              sharePrice,
              appreciation,
              totalAssets,
              isSmallText,
            },
            idx
          ) => (
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
                        fontSize: isSmallText
                          ? '1.5rem'
                          : isMobile
                          ? '3rem'
                          : '4.6875rem',
                        color: 'white',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {name}
                    </Heading>
                    <GreenSquare
                      style={{
                        height: isSmallText || isMobile ? '0.5rem' : '1rem',
                        width: isSmallText || isMobile ? '0.5rem' : '1rem',
                        marginLeft: '8px',
                        marginBottom: isMobile
                          ? isSmallText
                            ? '1.5rem'
                            : '1rem'
                          : '1rem',
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
