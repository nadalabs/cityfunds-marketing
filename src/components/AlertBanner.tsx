import { LinkText, SecondaryText } from '@elements/Typography';
import { styled } from 'styled-components';

interface BannerProps {
  primaryText: string;
}

export default function Banner({ primaryText }: BannerProps) {
  return (
    <BannerWrapper>
      <SecondaryText
        style={{ color: 'white', margin: '0 1rem 0 0', fontSize: '18px' }}
      >
        {primaryText}
      </SecondaryText>
      <LinkText
        href="/rewards-program"
        style={{ color: '#48DC95', margin: '0 1rem 0 0' }}
      >
        *Conditions apply
      </LinkText>
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

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    flex-direction: column;
  }
`;
