import { Caption } from '@elements/Typography';
import { FUND_STATUS, REGULATION } from '@utils/constants';
import { getTimeRemaining } from '@utils/helpers';
import Image from 'next/image';
import styled from 'styled-components';

interface StatusTickerProps {
  fund_data: any;
  isHome?: boolean;
  isDark?: boolean;
}

export default function StatusTicker({
  fund_data,
  isHome,
  isDark,
}: StatusTickerProps) {
  const { days, hours } = getTimeRemaining();

  return (
    <LockWrapper
      style={{ background: isDark ? '#2A8356' : 'rgba(22, 22, 22, 0.33)' }}
    >
      {fund_data?.regulation === REGULATION.ACCREDITED ? (
        <>
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
        </>
      ) : fund_data?.fund_status === FUND_STATUS.NEW_OFFERING ? (
        <>
          <Image
            src="/icons/lock.svg"
            alt="Lock"
            height={16}
            width={16}
            style={{ marginRight: '0.25rem' }}
          />
          <Caption style={{ color: 'white', fontWeight: 600 }}>
            {isHome || isDark ? 'Coming Soon' : 'Exclusive'}
          </Caption>
        </>
      ) : (
        <>
          <Image
            src="/icons/flash.svg"
            alt="Lock"
            height={16}
            width={16}
            style={{ marginRight: '0.25rem' }}
          />
          <Caption style={{ color: 'white', fontWeight: 600 }}>
            {days} Days {hours} Hours Left
          </Caption>
        </>
      )}
    </LockWrapper>
  );
}

export const LockWrapper = styled.div`
  display: flex;
  border-radius: 0.4265rem;
  backdrop-filter: blur(1.7px);
  padding: 0.17063rem 0.34125rem;
  text-transform: uppercase;
  width: fit-content;
`;
