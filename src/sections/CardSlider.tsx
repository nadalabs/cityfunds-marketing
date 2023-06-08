import { GreenSquare } from '@components/CarouselStepper';
import { CardWrapper, SliderWrapper } from '@elements/Containers';
import { Heading, PrimaryText } from '@elements/Typography';
import { EXTERNAL_ROUTES } from '@utils/constants';
import Link from 'next/link';
import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface CardSliderProps {
  heading: string;
  primaryText?: string;
  cards: {
    name: string;
    cardImage: string;
    link?: string;
    description?: ReactNode;
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
          ({ name, description, link, cardImage, isSmallText }, idx) => (
            <div key={idx}>
              <Link
                href={link ? link : EXTERNAL_ROUTES.WEB_APP}
                target={link ? '_blank' : '_self'}
              >
                <CardWrapper
                  style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 39.06%, rgba(0, 0, 0, 0.44) 67.71%, rgba(0, 0, 0, 0.79) 95.83%), url(${cardImage})`,
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                      <Heading
                        style={{
                          color: 'white',
                          marginBottom: '8px',
                          fontSize: isSmallText ? '32px' : '64px',
                          lineHeight: isSmallText ? '32px' : '64px',
                        }}
                      >
                        {name.toLocaleLowerCase()}
                      </Heading>
                      <GreenSquare
                        style={{
                          height: isSmallText ? '12px' : '16px',
                          width: isSmallText ? '12px' : '16px',
                          marginLeft: isSmallText ? '4px' : '8px',
                          marginBottom: isSmallText ? '12px' : '1rem',
                        }}
                      />
                    </div>
                    {description && description}
                  </div>
                </CardWrapper>
              </Link>
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
