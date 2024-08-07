import { BoldText } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import Link from 'next/link';
import styled from 'styled-components';

interface AlertBannerProps {
  banner?: {
    show_banner: boolean;
    text: string;
    button_text: string;
    link: string;
  };
  isWarning?: boolean;
}

export default function AlertBanner({ banner, isWarning }: AlertBannerProps) {
  const isMobileAgent = useIsMobile();

  return (
    <BannerWrapper
      style={{ backgroundColor: isWarning ? '#E14942' : '#303030' }}
    >
      <BoldText
        style={{
          display: 'inline',
          color: 'white',
          margin: '0 0.5rem 0 0',
          fontSize: isMobileAgent ? '14px' : '18px',
        }}
      >
        {banner?.text}
      </BoldText>
      <Link href={banner?.link || ''}>
        <BoldText
          style={{
            display: 'inline',
            color: '#48DC95',
            margin: '0 1rem 0 0',
            fontSize: isMobileAgent ? '14px' : '18px',
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
  position: fixed;
  top: 0;
  z-index: 99;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;
