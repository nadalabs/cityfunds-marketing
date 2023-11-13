import AssetTicker from '@components/cityfunds/AssetTicker';
import NadaText from '@components/cityfunds/NadaText';
import StatusTicker from '@components/cityfunds/StatusTicker';
import useIsMobile from '@hooks/useIsMobile';
import { REGULATION } from '@utils/constants';
import { IFundData } from '@utils/models';
import { urlForImage } from 'lib/sanity';
import Link from 'next/link';
import styled from 'styled-components';

interface CityfundCardProps {
  fund_data: IFundData;
  image: string;
  isHome?: boolean;
}

export const CityfundCard = ({
  fund_data,
  image,
  isHome,
}: CityfundCardProps) => {
  const isMobile = useIsMobile();

  return (
    <Link
      href={`/cityfunds/${fund_data?.fund_name
        .toLowerCase()
        .replace(/ /g, '-')}`}
    >
      <CardWrapper
        style={{
          justifyContent:
            fund_data?.regulation === REGULATION.ACCREDITED
              ? 'space-between'
              : 'flex-end',
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 39.06%, rgba(0, 0, 0, 0.22) 67.71%, rgba(0, 0, 0, 0.40) 95.83%), url(${urlForImage(
            image,
            isMobile ? (isHome ? 160 : 320) : isHome ? 288 : 576,
            isMobile ? window?.innerWidth - 32 : 288
          ).url()}), #232222 50% / cover no-repeat`,
          height: isMobile ? '10rem' : '18rem',
          width: isMobile ? window?.innerWidth - 32 : '18rem',
          padding: '1.5rem',
        }}
      >
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
