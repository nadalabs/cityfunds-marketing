import styled from 'styled-components';

export const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.main};
  font-style: normal;
  font-weight: 600;
  font-size: 46px;
  line-height: 46px;
  margin: 0 0 8px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 48px;
    line-height: 48px;
  }
`;

export const PrimaryText = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
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
    font-size: 10px;
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
  color: ${({ theme }) => theme.colors.lightGray};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
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

export const GreenSquare = styled.div`
  height: 16px;
  width: 16px;
  background-color: #48dc95;
  border-radius: 4px;
`;
