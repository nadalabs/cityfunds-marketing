import { GreenSquare } from '@components/common/CarouselStepper';
import { CardWrapper, SliderWrapper } from '@elements/Containers';
import { Heading, Overline, SecondaryText } from '@elements/Typography';
import { urlForImage } from 'lib/sanity';
import { styled } from 'styled-components';

interface TeamSliderProps {
  teammates: {
    name: string;
    image: string;
    role: string;
    linkedIn: string;
  }[];
}

export default function TeamSlider({ teammates }: TeamSliderProps) {
  return (
    <SliderWrapper>
      <HeadingWrapper>
        <Overline>Who We Are</Overline>
        <Heading>Our Team</Heading>
      </HeadingWrapper>
      <div style={{ display: 'flex', overflowX: 'scroll' }}>
        {teammates
          ?.map((props) => ({
            ...props,
            image: urlForImage(props.image).url(),
          }))
          .map(({ name, image, role, linkedIn }, idx) => (
            <div key={idx}>
              <CardWrapper
                onClick={() => window.open(linkedIn, '_blank')}
                style={{
                  padding: '2rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'flex-end',
                  background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 39.06%, rgba(0, 0, 0, 0.22) 67.71%, rgba(0, 0, 0, 0.40) 95.83%), url(${image})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                    <Heading
                      style={{
                        fontSize: '1.5rem',
                        lineHeight: '2rem',
                        color: 'white',
                        marginBottom: 0,
                      }}
                    >
                      {name}
                    </Heading>
                    <GreenSquare
                      style={{
                        height: '0.5rem',
                        width: '0.5rem',
                        marginLeft: '8px',
                        marginBottom: '0.5rem',
                      }}
                    />
                  </div>

                  <SecondaryText style={{ color: 'white', margin: 0 }}>
                    {role}
                  </SecondaryText>
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
