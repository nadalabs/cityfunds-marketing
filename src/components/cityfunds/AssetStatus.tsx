'use client';
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
}

export default function AssetStatus({ fund_data, isDark }: AssetStatusProps) {
  return (
    <>
      {fund_data?.regulation === REGULATION.ACCREDITED && (
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
            Accredited Exclusive
          </Caption>
        </LockWrapper>
      )}
    </>
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
