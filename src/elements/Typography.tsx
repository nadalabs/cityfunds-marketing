import styled from 'styled-components';

export const Heading1 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.main};
  font-style: normal;
  font-weight: 600;
  font-size: 75px;
  line-height: 100%;
  display: flex;
  align-items: center;
  color: #000000;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    text-align: center;
  }
`;

export const Heading2 = styled.h2`
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 42px;
  margin: 0;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.main};
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
`;

export const Overline = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.main};
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
`;

export const Caption = styled.div`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #1a1a1a;
  margin: 0;
`;

export const SmallLabel = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: left;
  margin: 0;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  cursor: pointer;
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
  position: relative;
  top: -8px;
`;
