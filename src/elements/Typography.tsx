import Link from 'next/link';
import styled from 'styled-components';

export const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 4.6875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: -0.03513rem;
  margin: 0 0 1rem 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 48px;
    line-height: 48px;
  }
`;

export const SecondaryHeading = styled(Heading)`
  font-size: 40px;
  line-height: 36px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 24px;
    line-height: 24px;
  }
`;

export const TertiaryHeading = styled(Heading)`
  font-size: 28px;
  line-height: 36px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 24px;
    line-height: 28px;
  }
`;

export const PrimaryText = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-family: ${({ theme }) => theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  margin: 0 0 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 14px;
  }
`;

export const SecondaryText = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-family: ${({ theme }) => theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  margin: 0 0 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const Overline = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.main};
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  margin: 0 0 0.5rem 0;
`;

export const Caption = styled.div`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  margin: 0;
`;

export const LinkText = styled(Link)`
  transition: ${({ theme }) => theme.transitions.ease};
  color: ${({ theme }) => theme.colors.darkGrey};
  font-family: ${({ theme }) => theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin: 0 24px 24px 0;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.lightGrey};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const ErrorText = styled.p`
  font-family: ${({ theme }) => theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 8px;
  color: #ff554f;
  text-align: left;
  margin: 0;
`;
