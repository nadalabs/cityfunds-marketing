import AssetTicker from '@components/cityfunds/AssetTicker';
import NadaText from '@components/cityfunds/NadaText';
import StatusTicker from '@components/cityfunds/StatusTicker';
import useIsMobile from '@hooks/useIsMobile';
import { IFundData } from '@utils/models';
import { urlForImage } from 'lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

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
      <CardWrapper>
        <ImageWrapper>
          <Image
            alt={fund_data?.fund_name}
            src={urlForImage(image, 400, width).url()}
            fill
          />
        </ImageWrapper>
        <ContentWrapper>
          <StatusTicker fund_data={fund_data} isHome={isHome} />
          <TickerWrapper>
            <NadaText
              name={fund_data?.fund_name}
              size={fund_data?.fund_name.length > 10 ? 'extraSmall' : 'small'}
            />
            <AssetTicker fund_data={fund_data} isSmall />
          </TickerWrapper>
        </ContentWrapper>
      </CardWrapper>
    </Link>
  );
};

export const CardWrapper = styled.div`
  border-radius: 2rem;
  box-shadow: 1.5px 1.5px 25px 0px rgba(0, 0, 0, 0.05);
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  position: relative;
  border-radius: 2rem;
  overflow: hidden;
  width: inherit;
  height: 19rem;
`;

export const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 0.25rem;
  }
`;
