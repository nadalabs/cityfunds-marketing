import AssetTicker from '@components/cityfunds/AssetTicker';
import NadaText from '@components/cityfunds/NadaText';
import StatusTicker from '@components/cityfunds/StatusTicker';
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

interface CityfundCardProps {
  fund_data: IFundData;
  image: string;
  isHome?: boolean;
  width?: number;
}

export const CityfundCard = ({
  fund_data,
  image,
  isHome,
  width,
}: CityfundCardProps) => {
  const isMobile = useIsMobile();

  return (
    <Link
      href={`${
        process.env.NEXT_PUBLIC_WEB_APP_URL
      }/cityfunds/${fund_data?.fund_name.toLowerCase().replace(/ /g, '-')}`}
      target="_blank"
    >
      <FundWrapper>
        <ImageWrapper>
          <Image
            alt={fund_data?.fund_name}
            src={urlForImage(image, isMobile ? 200 : 400, width).url()}
            fill
          />
        </ImageWrapper>
        <InnerWrapper>
          <StatusTicker fund_data={fund_data} isHome={isHome} />
          <TickerWrapper>
            <NadaText
              name={fund_data?.fund_name}
              size={fund_data?.fund_name.length > 10 ? 'extraSmall' : 'small'}
            />
            <AssetTicker fund_data={fund_data} isSmall />
          </TickerWrapper>
        </InnerWrapper>
      </FundWrapper>
    </Link>
  );
};
