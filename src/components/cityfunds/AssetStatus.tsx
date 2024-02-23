'use client';
import { Caption } from '@elements/Typography';
import { REGULATION } from '@utils/constants';
import { IFundData } from '@utils/models';
import Image from 'next/image';
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
            height={14}
            width={14}
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
  align-items: center;
  border-radius: 0.45rem;
  backdrop-filter: blur(1.7px);
  padding: 0.15rem 0.35rem;
  text-transform: uppercase;
  width: fit-content;
`;
