import Link from 'next/link';
import styled from 'styled-components';

export const PrimaryButton = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
  letter-spacing: 0.075rem;
  text-align: center;
  border-radius: 8px;
  padding: 0.625rem 1.25rem;
  cursor: pointer;
  border: none;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }

  &:disabled {
    background-color: #989b9f;
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
  height: 40px;
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
  cursor: pointer;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.875rem;
    line-height: 150%;
    letter-spacing: 0.03125rem;
  }
`;
