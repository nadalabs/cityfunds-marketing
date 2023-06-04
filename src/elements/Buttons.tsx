import Link from 'next/link';
import styled from 'styled-components';

export const PrimaryButton = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.main};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  text-align: center;
  border-radius: 8px;
  height: 44px;
  padding: 10px 20px;
  cursor: pointer;
  border: none;

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
