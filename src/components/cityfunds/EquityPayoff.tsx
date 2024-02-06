'use client';
import { FlexWrapper } from '@elements/Containers';
import { PrimaryText } from '@elements/Typography';

export default function EquityPayoff() {
  return (
    <FlexWrapper
      style={{
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '0.5rem',
      }}
    >
      <PrimaryText
        style={{
          textTransform: 'uppercase',
          color: '#2A8356',
          fontWeight: 600,
        }}
      >
        HEI’s Generate Returns 2 Ways
      </PrimaryText>
      <PrimaryText
        style={{
          paddingLeft: '1.5rem',
          color: '#202124',
          fontWeight: 600,
        }}
      >
        Property Values Increase
      </PrimaryText>
      <PrimaryText
        style={{
          paddingLeft: '1.5rem',
          color: '#202124',
          fontWeight: 600,
        }}
      >
        Payoffs Generated from a Home Sale or Refinance
      </PrimaryText>
    </FlexWrapper>
  );
}
