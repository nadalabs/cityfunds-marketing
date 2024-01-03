import SliderStepper from '@components/common/SliderStepper';
import { FlexWrapper, SectionWrapper } from '@elements/Containers';
import {
  BoldText,
  Overline,
  PrimaryText,
  SmallHeading,
} from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { format, parseISO } from 'date-fns';
import { urlForImage } from 'lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

interface BlogSliderProps {
  tag: string;
  blogPosts: {
    title: string;
    coverImage: string;
    date;
    excerpt: string;
    tag: string;
    slug: string;
  }[];
}

export default function BlogSlider({ tag, blogPosts }: BlogSliderProps) {
  const [activeStep, setActiveStep] = useState(0);
  const sliderRef = useRef(null);
  const isMobile = useIsMobile();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: isMobile ? 1.15 : 4,
    slidesToScroll: isMobile ? 1 : 4,
    swipeToSlide: true,
    beforeChange: (_, next) => setActiveStep(next),
  };

  return (
    <SectionWrapper>
      <FlexWrapper
        style={{ justifyContent: 'space-between', marginBottom: '1rem' }}
      >
        <SmallHeading>{tag}</SmallHeading>
        <SliderStepper
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          totalSteps={blogPosts?.length + 1}
          increment={isMobile ? 1 : 4}
          sliderRef={sliderRef}
        />
      </FlexWrapper>

      <Slider ref={sliderRef} {...settings}>
        {blogPosts.map(({ title, date, excerpt, coverImage, slug }, idx) => (
          <Link key={idx} href={`/learn/${slug}`}>
            <CardWrapper style={{ width: '500px' }}>
              <Image
                alt={title}
                src={urlForImage(coverImage, 200, 300)}
                width={300}
                height={200}
                style={{ borderRadius: '2rem' }}
              />
              <Overline>
                <time dateTime={date}>
                  {format(parseISO(date), 'LLLL	d, yyyy')}
                </time>
              </Overline>
              <BoldText>{title}</BoldText>
              <PrimaryText>{excerpt}</PrimaryText>
            </CardWrapper>
          </Link>
        ))}
      </Slider>
    </SectionWrapper>
  );
}

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: ${({ theme }) => theme.transitions.ease};
  max-width: 300px;
  margin-right: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 300px;
  }
`;
