import { FlexWrapper } from '@elements/Containers';
import { Caption } from '@elements/Typography';
import { FUND_STATUS, REGULATION } from '@utils/constants';
import { isDateInRange } from '@utils/helpers';
import { IFundData } from '@utils/models';
import Image from 'next/image';
import Countdown from 'react-countdown';
import styled from 'styled-components';

interface AssetStatusProps {
  fund_data?: IFundData;
  isDark?: boolean;
  isRecurring?: boolean;
}

export default function AssetStatus({
  fund_data,
  isDark,
  isRecurring,
}: AssetStatusProps) {
  const showCountdown = isDateInRange(new Date(fund_data?.nav_update || ''));

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

  if (isRecurring) {
    return (
      <LockWrapper style={{ background: 'rgba(22, 22, 22, 0.33)' }}>
        <Caption style={{ color: 'white', fontWeight: 600 }}>Recurring</Caption>
      </LockWrapper>
    );
  }

  if (fund_data?.regulation === REGULATION.ACCREDITED) {
    return (
      <LockWrapper
        style={{ background: isDark ? '#2A8356' : 'rgba(22, 22, 22, 0.33)' }}
      >
        <Image
          src="/icons/lock.svg"
          alt="Lock"
          height={14}
          width={14}
          style={{ marginRight: '0.25rem' }}
        />
        <Caption style={{ color: 'white', fontWeight: 600 }}>
          Accredited Exclusive
        </Caption>
      </LockWrapper>
    );
  }

  if (fund_data?.fund_status === FUND_STATUS.NEW_OFFERING) {
    return (
      <LockWrapper
        style={{ background: isDark ? '#2A8356' : 'rgba(22, 22, 22, 0.33)' }}
      >
        <Image
          src="/icons/lock.svg"
          alt="Lock"
          height={14}
          width={14}
          style={{ marginRight: '0.25rem' }}
        />
        <Caption style={{ color: 'white', fontWeight: 600 }}>
          Coming Soon
        </Caption>
      </LockWrapper>
    );
  }

  if (showCountdown) {
    return (
      <LockWrapper
        style={{ background: isDark ? '#2A8356' : 'rgba(22, 22, 22, 0.33)' }}
      >
        <FlexWrapper>
          <Image
            src="/icons/flash.svg"
            alt="Lock"
            height={14}
            width={14}
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
    );
  }

  return <div />;
}

export const LockWrapper = styled.div`
  display: flex;
  border-radius: 0.4265rem;
  backdrop-filter: blur(1.7px);
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
  width: fit-content;
`;
