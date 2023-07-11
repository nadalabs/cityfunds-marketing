import styled from 'styled-components';

export const SectionWrapper = styled.div`
  padding: 100px 150px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 48px 24px;
  }
`;

export const StackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: inherit;
`;

export const SliderWrapper = styled.div`
  padding: 100px 0 100px 150px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 48px 0 48px 24px;
  }
`;

export const CardWrapper = styled.div`
  background-size: cover;
  width: 25rem;
  height: 25rem;
  padding: 2rem;
  margin-right: 1.5rem;
  border-radius: 52px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 20rem;
    height: 20rem;
    padding: 2rem;
    margin-right: 1rem;
    border-radius: 22px;
  }
`;
