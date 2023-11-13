import Link from 'next/link';
import styled from 'styled-components';

export const PrimaryButton = styled.button<{ isInverted?: boolean }>`
  color: ${({ theme, isInverted }) =>
    isInverted ? theme.colors.primary : 'white'};
  background: ${({ theme, isInverted }) =>
    isInverted ? 'white' : theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
  letter-spacing: 0.07813rem;
  text-align: center;
  border-radius: 0.5rem;
  padding: 0.625rem 1.25rem;
  cursor: pointer;
  border: none;
  text-transform: uppercase;
  box-shadow: 2px 2px 30px 0px rgba(0, 0, 0, 0.05);

  &:disabled {
    background-color: ${({ isInverted }) =>
      isInverted ? '#FFFFFF' : 'rgba(42, 131, 86, 0.4)'};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;

export const SecondaryButton = styled.button`
  color: ${({ theme }) => theme.colors.grey};
  font-family: ${({ theme }) => theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  background: transparent;
  border: transparent;
  border-radius: 3px;
  cursor: pointer;
  padding: 20px 0;
`;

export const LinkButton = styled(Link)`
  transition: ${({ theme }) => theme.transitions.ease};
  cursor: pointer;
  margin-right: 32px;
`;

export const NavbarLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
  letter-spacing: 0.075rem;
  text-transform: uppercase;
  transition: ${({ theme }) => theme.transitions.ease};
  cursor: pointer;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.875rem;
    line-height: 150%;
    letter-spacing: 0.03125rem;
  }
`;
