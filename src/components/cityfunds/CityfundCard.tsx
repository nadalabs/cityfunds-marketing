'use client';
import CityfundTicker from '@components/cityfunds/CityfundTicker';
import NadaText from '@components/cityfunds/NadaText';
import {
  FundWrapper,
  ImageWrapper,
  InnerWrapper,
  TickerWrapper,
} from '@elements/Containers';
import useIsMobile from '@hooks/useIsMobile';
import { IFundData } from '@utils/models';
import { urlForImage } from 'lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import AssetStatus from '@components/cityfunds/AssetStatus';

interface CityfundCardProps {
  fund_data: IFundData;
  image: string;
  width?: number;
  isSlider?: boolean;
  isStatic?: boolean;
}

export default function CityfundCard({
  fund_data,
  image,
  width,
  isSlider,
  isStatic,
}: CityfundCardProps) {
  const isMobile = useIsMobile();

  function renderCard() {
    return (
      <FundWrapper
        style={{
          cursor: isStatic ? 'default' : 'pointer',
          margin: isSlider ? (isMobile ? '0 0.5rem' : '0.5rem 0') : '0',
        }}
      >
        <ImageWrapper>
          <Image
            alt={fund_data?.fund_name}
            src={urlForImage(image, isMobile ? 200 : 400, width)}
            fill
          />
        </ImageWrapper>
        <InnerWrapper>
          <AssetStatus fund_data={fund_data} />
          <TickerWrapper>
            <NadaText
              name={fund_data?.fund_name}
              size={fund_data?.fund_name.length > 10 ? 'extraSmall' : 'small'}
            />
            <CityfundTicker fund_data={fund_data} isSmall />
          </TickerWrapper>
        </InnerWrapper>
      </FundWrapper>
    );
  }

  if (isStatic) {
    return renderCard();
  } else {
    return (
      <Link
        href={`${process.env.NEXT_PUBLIC_WEB_APP_URL}/${fund_data?.fund_name
          .toLowerCase()
          .replace(/ /g, '-')}`}
        target="_blank"
      >
        {renderCard()}
      </Link>
    );
  }
}
