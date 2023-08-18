import NadaText from '@components/cityfunds/NadaText';
import { Caption } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { FUND_STATUS, REGULATION } from '@utils/constants';
import { IFundData } from '@utils/models';
import { urlForImage } from 'lib/sanity';
import Image from 'next/image';
import styled from 'styled-components';

interface CityfundCardProps {
  fund_data: IFundData;
  card_data: any;
  image: string;
  isHome: boolean;
}

export const CityfundCard = ({
  fund_data,
  card_data,
  image,
  isHome,
}: CityfundCardProps) => {
  const isMobile = useIsMobile();

  return (
    <CardWrapper
      onClick={() =>
        window.open(
          `${
            process.env.NEXT_PUBLIC_WEB_APP_URL
          }/cityfunds/${fund_data?.fund_name.toLowerCase()}`,
          '_blank'
        )
      }
      style={{
        justifyContent:
          fund_data?.regulation === REGULATION.ACCREDITED
            ? 'space-between'
            : 'flex-end',
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 39.06%, rgba(0, 0, 0, 0.22) 67.71%, rgba(0, 0, 0, 0.40) 95.83%), url(${urlForImage(
          image,
          isMobile ? 320 : 512,
          isMobile ? window?.innerWidth - 32 : 384
        ).url()}), #232222 50% / cover no-repeat`,
        width: isMobile && isHome ? '100%' : isMobile ? '20rem' : '24rem',
      }}
    >
      <ContentWrapper
        style={{
          justifyContent:
            fund_data?.regulation === REGULATION.ACCREDITED ||
            fund_data?.fund_status === FUND_STATUS.PRESALE
              ? 'space-between'
              : 'flex-end',
        }}
      >
        {fund_data?.regulation === REGULATION.ACCREDITED && (
          <LockWrapper>
            <Image
              src="/icons/lock.svg"
              alt="Lock"
              height={16}
              width={16}
              style={{ marginRight: '0.25rem' }}
            />
            <Caption style={{ color: 'white', fontWeight: 600 }}>
              Accredited Only
            </Caption>
          </LockWrapper>
        )}
        {fund_data?.fund_status === FUND_STATUS.PRESALE && (
          <LockWrapper>
            <Image
              src="/icons/lock.svg"
              alt="Lock"
              height={16}
              width={16}
              style={{ marginRight: '0.25rem' }}
            />
            <Caption style={{ color: 'white', fontWeight: 600 }}>
              {isHome ? 'Coming Soon' : 'Exclusive'}
            </Caption>
          </LockWrapper>
        )}

        <TickerWrapper>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <NadaText name={fund_data?.fund_name} />

            <div
              style={{
                display: 'flex',
                justifyContent:
                  fund_data?.fund_status === FUND_STATUS.ACTIVE
                    ? 'space-between'
                    : 'flex-start',
                gap:
                  fund_data?.fund_status === FUND_STATUS.ACTIVE
                    ? '0'
                    : '1.5rem',
              }}
            >
              {card_data.map(({ label, value }: any, jdx: number) => (
                <div key={jdx}>
                  <StatLabel>{label}</StatLabel>
                  <StatWrapper>
                    <StatValue>{value}</StatValue>
                    {jdx === 1 && !!fund_data?.appreciation && (
                      <Image
                        src="/icons/arrow-up.svg"
                        alt="Arrow Up"
                        width={isMobile ? 12 : 16}
                        height={isMobile ? 12 : 16}
                      />
                    )}
                  </StatWrapper>
                </div>
              ))}
            </div>
          </div>
        </TickerWrapper>
      </ContentWrapper>
    </CardWrapper>
  );
};

export const CardWrapper = styled.div`
  width: 24rem;
  height: 32rem;
  border-radius: 3.125rem;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    height: 20rem;
  }
`;

export const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 1.5rem;
  }
`;

export const LockWrapper = styled.div`
  display: flex;
  border-radius: 0.4265rem;
  background: rgba(22, 22, 22, 0.33);
  backdrop-filter: blur(1.7px);
  padding: 0.17063rem 0.34125rem;
  text-transform: uppercase;
  width: fit-content;
`;

export const TickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.3125rem;
  border-radius: 1.5625rem;
  background: rgba(0, 0, 0, 0.33);
  backdrop-filter: blur(2.5px);
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
