import styled from 'styled-components';

export const SectionWrapper = styled.div<{ isBackground?: boolean }>`
  padding: 6.25rem 9.5rem;
  background: ${({ isBackground }) =>
    isBackground
      ? 'linear-gradient(0deg, rgba(42, 131, 86, 0.05) 0%, rgba(42, 131, 86, 0.05) 100%), #FFF'
      : 'none'};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 48px 24px;
  }
`;

export const StackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 0.5rem;
  }
`;

export const CardWrapper = styled.div`
  background-size: cover;
  width: 24rem;
  height: 24rem;
  padding: 2rem;
  margin-right: 1.5rem;
  border-radius: 2rem;
  box-shadow: 1.5px 1.5px 25px 0px rgba(0, 0, 0, 0.05);

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 16rem;
    height: 16rem;
    padding: 1.5rem;
    margin-right: 1rem;
    border-radius: 22px;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ShaddowWrapper = styled.div<{ isShort?: boolean }>`
  padding: 1.5rem;
  height: ${({ isShort }) => (isShort ? '14rem' : '22rem')};
  width: 100%;
  border-radius: 2rem;
  box-shadow: 1.5px 1.5px 25px 0px rgba(0, 0, 0, 0.05);
  background-color: #ffffff;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: ${({ isShort }) => (isShort ? 'inherit' : '22rem')};
  }
`;
