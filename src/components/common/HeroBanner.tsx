import { PrimaryText } from '@elements/Typography';
import styled from 'styled-components';

interface HeroBannerProps {
  primaryText: string;
}

export default function HeroBanner({ primaryText }: HeroBannerProps) {
  return (
    <BannerWrapper>
      <PrimaryText style={{ color: 'white' }}>{primaryText}</PrimaryText>
      <PrimaryText style={{ color: 'white' }}>Learn More</PrimaryText>
    </BannerWrapper>
  );
}

const BannerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  background-color: #48dc95;
  border-radius: 0.5rem;
  padding: 0.625rem 1.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;
