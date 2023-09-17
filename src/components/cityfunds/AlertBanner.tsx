import { BoldText } from '@elements/Typography';
import { scrollToId } from '@utils/helpers';
import { styled } from 'styled-components';

interface AlertBannerProps {
  primaryText: string;
}

export default function AlertBanner({ primaryText }: AlertBannerProps) {
  return (
    <BannerWrapper>
      <BoldText
        style={{ color: 'white', margin: '0 1rem 0 0', fontSize: '18px' }}
      >
        {primaryText}
      </BoldText>
      <BoldText
        onClick={() => scrollToId('promo')}
        style={{
          color: '#48DC95',
          margin: '0 1rem 0 0',
          fontSize: '18px',
          cursor: 'pointer',
        }}
      >
        Learn More
      </BoldText>
    </BannerWrapper>
  );
}

const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: #303030;
  text-align: center;
  padding: 0.5rem 0;
  position: absolute;
  top: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    flex-direction: column;
  }
`;
