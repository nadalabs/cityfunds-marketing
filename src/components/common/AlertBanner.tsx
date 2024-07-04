import { BoldText } from '@elements/Typography';
import Link from 'next/link';
import styled from 'styled-components';

interface AlertBannerProps {
  banner?: {
    show_banner: boolean;
    text: string;
    button_text: string;
    button_link: string;
  };
  isWarning?: boolean;
}

export default function AlertBanner({ banner, isWarning }: AlertBannerProps) {
  return (
    <BannerWrapper
      style={{ backgroundColor: isWarning ? '#E14942' : '#303030' }}
    >
      <BoldText
        style={{
          display: 'inline',
          color: 'white',
          margin: '0 0.5rem 0 0',
          fontSize: '18px',
        }}
      >
        {banner?.text}
      </BoldText>
      <Link href={banner?.button_link || ''}>
        <BoldText
          style={{
            display: 'inline',
            color: '#48DC95',
            margin: '0 1rem 0 0',
            fontSize: '18px',
            cursor: 'pointer',
          }}
        >
          {banner?.button_text}
        </BoldText>
      </Link>
    </BannerWrapper>
  );
}

const BannerWrapper = styled.div`
  width: 100vw;
  text-align: center;
  padding: 0.5rem 0;
  position: absolute;
  top: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;
