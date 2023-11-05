import { GreenSquare } from '@components/common/CarouselStepper';
import {
  CardWrapper,
  SectionWrapper,
  StackWrapper,
} from '@elements/Containers';
import { BoldText, Heading, Overline } from '@elements/Typography';
import { urlForImage } from 'lib/sanity';

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
    <SectionWrapper style={{ paddingRight: 0 }}>
      <StackWrapper style={{ gap: '1rem' }}>
        <Overline>Who We Are</Overline>
        <Heading>Our Team</Heading>

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
                          fontSize: name.length > 20 ? '1.4rem' : '1.5rem',
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
                          borderRadius: '2px',
                          marginBottom: '0.5rem',
                        }}
                      />
                    </div>

                    <BoldText
                      style={{ fontSize: '1rem', color: 'white', margin: 0 }}
                    >
                      {role}
                    </BoldText>
                  </div>
                </CardWrapper>
              </div>
            ))}
        </div>
      </StackWrapper>
    </SectionWrapper>
  );
}
