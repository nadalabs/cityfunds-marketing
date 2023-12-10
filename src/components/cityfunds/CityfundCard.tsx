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

interface CityfundCardProps {
  fund_data: IFundData;
  image: string;
  width?: number;
}

export default function CityfundCard({
  fund_data,
  image,
  width,
}: CityfundCardProps) {
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
          <TickerWrapper>
            <NadaText
              name={fund_data?.fund_name}
              size={fund_data?.fund_name.length > 10 ? 'extraSmall' : 'small'}
            />
            <CityfundTicker fund_data={fund_data} isSmall />
          </TickerWrapper>
        </InnerWrapper>
      </FundWrapper>
    </Link>
  );
}
