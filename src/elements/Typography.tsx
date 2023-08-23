import Link from 'next/link';
import styled from 'styled-components';

export const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.darkText};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 3.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: -0.035rem;
  margin: 0 0 0.5rem 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2rem;
    line-height: 2.5rem;
  }
`;

export const SmallHeading = styled(Heading)`
  font-size: 1.75rem;
  line-height: 125%;
  letter-spacing: -0.015rem;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.5rem;
  }
`;

export const PrimaryText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.03125rem;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.875rem;
  }
`;

export const LargeText = styled(PrimaryText)`
  color: ${({ theme }) => theme.colors.lightText};
  font-size: 1.5rem;
  letter-spacing: -0.015rem;
  line-height: 125%;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1rem;
  }
`;

export const BoldText = styled(LargeText)`
  color: ${({ theme }) => theme.colors.darkText};
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 14px;
  }
`;

export const Overline = styled.p`
  color: ${({ theme }) => theme.colors.darkText};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.0175rem;
  margin: 0;
`;

export const Caption = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
  margin: 0;
`;

export const LinkText = styled(Link)`
  transition: ${({ theme }) => theme.transitions.ease};
  color: ${({ theme }) => theme.colors.darkText};
  font-family: ${({ theme }) => theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin: 0 24px 24px 0;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.lightText};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const ErrorText = styled.p`
  position: relative;
  top: 0.25rem;
  left: 0.5rem;
  height: 0;
  font-family: ${({ theme }) => theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 8px;
  color: #ff554f;
  text-align: left;
  margin: 0;
`;
