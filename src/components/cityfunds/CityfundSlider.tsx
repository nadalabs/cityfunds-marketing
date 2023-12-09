import CityfundCard from '@components/cityfunds/CityfundCard';
import useIsMobile from '@hooks/useIsMobile';
import { REGULATION } from '@utils/constants';
import { ICityfund } from '@utils/models';
import { useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

interface CityfundSliderProps {
  cityfunds: ICityfund[];
}

export default function CityfundSlider({ cityfunds }: CityfundSliderProps) {
  const isMobile = useIsMobile();
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    vertical: true,
    rtl: true,
  };

  const ALL_CARDS = cityfunds
    .filter(({ fund_data }) => fund_data?.regulation === REGULATION.RETAIL)
    .map(({ fund_data, fund_content }) => ({
      fund_data,
      fund_content,
      images: [fund_content?.image_gallery[0], fund_content?.card_back],
    }))
    .sort((a, b) =>
      a.fund_data?.share_price < b.fund_data?.share_price ? 1 : -1
    );

  return (
    <div style={{ width: '40%', height: 'inherit' }}>
      <Slider ref={sliderRef} {...settings}>
        {ALL_CARDS?.map((card, idx) => (
          <FadeWrapper key={idx}>
            <TopWrapper>
              <CityfundCard {...card} image={card?.images[0]} />
            </TopWrapper>
            <BottomWrapper>
              <CityfundCard {...card} image={card?.images[1]} />
            </BottomWrapper>
          </FadeWrapper>
        ))}
      </Slider>
    </div>
  );
}

const FadeWrapper = styled.div`
  width: 22rem;
  height: 22rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    height: 30rem;
  }
`;

const TopWrapper = styled.div`
  opacity: 1;
  -webkit-transition: opacity 0.5s ease-in-out;
  -moz-transition: opacity 0.5s ease-in-out;
  -o-transition: opacity 0.5s ease-in-out;
  -ms-transition: opacity 0.5s ease-in-out;
  transition: opacity 0.5s ease-in-out;

  &:hover {
    opacity: 0;
  }
`;

const BottomWrapper = styled.div`
  position: relative;
  bottom: 18rem;
  z-index: -1;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    bottom: 30rem;
  }
`;
