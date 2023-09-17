import styled from 'styled-components';

export const SectionWrapper = styled.div`
  padding: 6.25rem 150px;

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

export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 100px 0 100px 150px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 48px 0 48px 24px;
  }
`;

export const CardWrapper = styled.div`
  background-size: cover;
  width: 24rem;
  height: 24rem;
  padding: 2rem;
  margin-right: 1.5rem;
  border-radius: 3.174rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 16rem;
    height: 16rem;
    padding: 1.5rem;
    margin-right: 1rem;
    border-radius: 22px;
  }
`;
