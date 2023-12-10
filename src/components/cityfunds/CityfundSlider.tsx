import CityfundCard from '@components/cityfunds/CityfundCard';
import { TopWrapper } from '@elements/Containers';
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
    <div style={{ width: '40%' }}>
      <Slider ref={sliderRef} {...settings}>
        {ALL_CARDS?.map((card, idx) => (
          <div key={idx}>
            <TopWrapper>
              <CityfundCard {...card} image={card?.images[0]} />
            </TopWrapper>
            {!isMobile && (
              <BottomWrapper>
                <CityfundCard {...card} image={card?.images[1]} />
              </BottomWrapper>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}

const BottomWrapper = styled.div`
  position: relative;
  bottom: 18rem;
  z-index: -1;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    bottom: 30rem;
  }
`;
