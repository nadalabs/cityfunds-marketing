import { BoldText } from '@elements/Typography';
import styled from 'styled-components';

interface AlertBannerProps {
  primaryText: string;
  btnText: string;
  onClick: () => void;
}

export default function AlertBanner({
  primaryText,
  btnText,
  onClick,
}: AlertBannerProps) {
  return (
    <BannerWrapper>
      <BoldText
        style={{
          display: 'inline',
          color: 'white',
          margin: '0 0.5rem 0 0',
          fontSize: '18px',
        }}
      >
        {primaryText}
      </BoldText>
      <BoldText
        onClick={onClick}
        style={{
          display: 'inline',
          color: '#48DC95',
          margin: '0 1rem 0 0',
          fontSize: '18px',
          cursor: 'pointer',
        }}
      >
        {btnText}
      </BoldText>
    </BannerWrapper>
  );
}

const BannerWrapper = styled.div`
  width: 100vw;
  background-color: #303030;
  text-align: center;
  padding: 0.5rem 0;
  position: absolute;
  top: 0;
  z-index: 999999999;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;
