import AssetTicker from '@components/cityfunds/AssetTicker';
import { GreenSquare } from '@components/common/CarouselStepper';
import { CardWrapper, SliderWrapper } from '@elements/Containers';
import { Heading, LargeText, Overline } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { EXTERNAL_ROUTES } from '@utils/constants';
import { ICityfund } from '@utils/models';
import { styled } from 'styled-components';

interface CityfundsSliderProps {
  heading: string;
  primaryText: string;
  overline?: string;
  cards: ICityfund[];
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
        <Overline>{overline}</Overline>
        <Heading>{heading}</Heading>
        <LargeText>{primaryText}</LargeText>
      </HeadingWrapper>
      <div style={{ display: 'flex', overflowX: 'scroll' }}>
        {cards?.map(({ name, images, returns }, idx) => (
          <div key={idx}>
            <CardWrapper
              onClick={() => window.location.replace(EXTERNAL_ROUTES.WEB_APP)}
              style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'flex-end',
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 39.06%, rgba(0, 0, 0, 0.22) 67.71%, rgba(0, 0, 0, 0.40) 95.83%), url(${images?.cardImage}), lightgray 50% / cover no-repeat`,
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                  <Heading
                    style={{
                      fontSize: false
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
                      height: false || isMobile ? '0.5rem' : '1rem',
                      width: false || isMobile ? '0.5rem' : '1rem',
                      marginLeft: '8px',
                      marginBottom: isMobile
                        ? false
                          ? '1.5rem'
                          : '1rem'
                        : '1rem',
                    }}
                  />
                </div>

                {returns?.sharePrice && (
                  <AssetTicker
                    sharePrice={returns?.sharePrice}
                    appreciation={returns?.appreciation}
                    totalAssets={returns?.totalAssets}
                  />
                )}
              </div>
            </CardWrapper>
          </div>
        ))}
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
