import { FlexWrapper } from '@elements/Containers';
import { Caption } from '@elements/Typography';
import { FUND_STATUS, REGULATION } from '@utils/constants';
import { isDateInRange } from '@utils/helpers';
import Image from 'next/image';
import Countdown from 'react-countdown';
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
  const showCountdown = isDateInRange(new Date(fund_data?.nav_update));

  const renderer = ({ days, hours }) => {
    const numbers = [
      { label: 'days', value: days },
      { label: 'hrs', value: hours },
    ];

    return (
      <FlexWrapper style={{ justifyContent: 'flex-start', gap: '0.25rem' }}>
        {numbers.map(({ label, value }, idx) => (
          <Caption key={idx} style={{ color: 'white', fontWeight: 600 }}>
            {`${value} ${label}`}
          </Caption>
        ))}
      </FlexWrapper>
    );
  };

  return (
    <div>
      {fund_data?.regulation === REGULATION.ACCREDITED ? (
        <LockWrapper
          style={{ background: isDark ? '#2A8356' : 'rgba(22, 22, 22, 0.33)' }}
        >
          <Image
            src="/icons/lock.svg"
            alt="Lock"
            height={16}
            width={16}
            style={{ marginRight: '0.25rem' }}
          />
          <Caption style={{ color: 'white', fontWeight: 600 }}>
            Accredited Offering
          </Caption>
        </LockWrapper>
      ) : fund_data?.fund_status === FUND_STATUS.NEW_OFFERING ? (
        <LockWrapper
          style={{ background: isDark ? '#2A8356' : 'rgba(22, 22, 22, 0.33)' }}
        >
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
        </LockWrapper>
      ) : showCountdown ? (
        <LockWrapper
          style={{ background: isDark ? '#2A8356' : 'rgba(22, 22, 22, 0.33)' }}
        >
          <FlexWrapper>
            <Image
              src="/icons/flash.svg"
              alt="Lock"
              height={16}
              width={16}
              style={{ marginRight: '0.25rem' }}
            />
            <FlexWrapper style={{ flexDirection: 'column' }}>
              <Caption
                style={{
                  color: 'white',
                  fontWeight: 600,
                  lineHeight: '100%',
                  marginTop: '0.25rem',
                }}
              >
                Next Price Update
              </Caption>
              <Countdown date={fund_data?.nav_update} renderer={renderer} />
            </FlexWrapper>
          </FlexWrapper>
        </LockWrapper>
      ) : null}
    </div>
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
