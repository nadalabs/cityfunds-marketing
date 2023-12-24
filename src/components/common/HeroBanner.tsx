import { LinkText, PrimaryText } from '@elements/Typography';
import styled from 'styled-components';

interface HeroBannerProps {
  primaryText: string;
  link: string;
}

export default function HeroBanner({ primaryText, link }: HeroBannerProps) {
  return (
    <BannerWrapper>
      <PrimaryText style={{ color: 'white', width: '70%' }}>
        {primaryText}
      </PrimaryText>
      <div>
        <LinkText
          href={link}
          target="_blank"
          style={{ color: 'white', cursor: 'pointer', marginRight: 0 }}
        >
          Learn More
        </LinkText>
      </div>
    </BannerWrapper>
  );
}

const BannerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #48dc95;
  border-radius: 0.5rem;
  padding: 0.625rem 1.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;
