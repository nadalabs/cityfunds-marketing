import AssetTicker from '@components/cityfunds/AssetTicker';
import NadaText from '@components/cityfunds/NadaText';
import StatusTicker from '@components/cityfunds/StatusTicker';
import useIsMobile from '@hooks/useIsMobile';
import { REGULATION } from '@utils/constants';
import { IFundData } from '@utils/models';
import { urlForImage } from 'lib/sanity';
import Link from 'next/link';
import styled from 'styled-components';

interface AccredCardProps {
  fund_data: IFundData;
  image: string;
  isHome: boolean;
}

export default function AccredCard({
  fund_data,
  image,
  isHome,
}: AccredCardProps) {
  const isMobile = useIsMobile();

  return (
    <Link href={`/cityfunds/${fund_data?.fund_name.toLowerCase()}`}>
      <CardWrapper
        style={{
          justifyContent:
            fund_data?.regulation === REGULATION.ACCREDITED
              ? 'space-between'
              : 'flex-end',
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 39.06%, rgba(0, 0, 0, 0.22) 67.71%, rgba(0, 0, 0, 0.40) 95.83%), url(${urlForImage(
            image,
            isMobile ? 480 : 576,
            isMobile ? 320 : 352
          ).url()}), #232222 50% / cover no-repeat`,
          width: isMobile ? '20rem' : '22rem',
          height: isMobile ? '30rem' : '36rem',
          padding: '1.5rem',
        }}
      >
        <ContentWrapper>
          <StatusTicker fund_data={fund_data} isHome={isHome} />
          <TickerWrapper>
            <NadaText
              name={fund_data?.fund_name}
              size={fund_data?.fund_name.length > 10 ? 'small' : null}
            />
            <AssetTicker fund_data={fund_data} />
          </TickerWrapper>
        </ContentWrapper>
      </CardWrapper>
    </Link>
  );
}

export const CardWrapper = styled.div`
  border-radius: 3.125rem;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    height: 30rem;
  }
`;

export const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem;
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

export const StatLabel = styled.p`
  color: #fff;
  font-family: Poppins;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.04638rem;
  text-transform: uppercase;
  margin-bottom: 0.25rem;
`;

export const StatValue = styled.p`
  color: #fff;
  font-family: Poppins;
  font-size: 0.92775rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.04638rem;
`;

export const StatWrapper = styled.div`
  border-radius: 0.46388rem;
  background: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(1.8555556535720825px);
  display: inline-flex;
  align-items: center;
  padding: 0.18556rem 0.37113rem;
  gap: 0.18556rem;
  height: 2rem;
`;