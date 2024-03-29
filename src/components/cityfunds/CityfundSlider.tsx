'use client';
import CityfundCard from '@components/cityfunds/CityfundCard';
import useIsMobile from '@hooks/useIsMobile';
import { REGULATION } from '@utils/constants';
import { ICityfund } from '@utils/models';
import { useRef } from 'react';
import Slider from 'react-slick';

interface CityfundSliderProps {
  cityfunds: ICityfund[];
}

export default function CityfundSlider({ cityfunds }: CityfundSliderProps) {
  const isMobile = useIsMobile();
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: isMobile ? 1.25 : 2.5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 8000,
    cssEase: 'linear',
    vertical: !isMobile,
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
    <div style={{ maxWidth: isMobile ? '100%' : '32rem' }}>
      <Slider ref={sliderRef} {...settings}>
        {ALL_CARDS?.map((card, idx) => (
          <CityfundCard key={idx} {...card} image={card?.images[0]} isSlider />
        ))}
      </Slider>
    </div>
  );
}
