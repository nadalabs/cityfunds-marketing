import Link from 'next/link';
import styled from 'styled-components';

export const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.main};
  font-style: normal;
  font-weight: 600;
  font-size: 42px;
  line-height: 42px;
  margin: 0 0 8px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 48px;
    line-height: 48px;
  }
`;

export const HeadingLarge = styled(Heading)`
  font-size: 64px;
  line-height: 72px;
`;

export const HeadingSmall = styled(Heading)`
  font-size: 32px;
  line-height: 36px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 24px;
    line-height: 24px;
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
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  margin: 0 0 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 14px;
    line-height: 14px;
  }
`;

export const Overline = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.main};
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  margin: 0 0 24px 0;
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

export const LinkText = styled(Link)<{ isDarkMode?: boolean }>`
  transition: ${({ theme }) => theme.transitions.ease};
  color: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.colors.white : theme.colors.darkGrey};
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

export const GreenSquare = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 16px;
  width: 16px;
  border-radius: 4px;
`;
