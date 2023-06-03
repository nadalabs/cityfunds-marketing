import styled from 'styled-components';

export const SectionWrapper = styled.div`
  padding: 100px 150px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 48px 24px;
  }
`;

export const SliderWrapper = styled.div`
  padding: 100px 0 100px 150px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 48px 0 48px 24px;
  }
`;

export const CardWrapper = styled.div`
  background-size: cover;
  width: 400px;
  height: 400px;
  padding: 40px;
  margin-right: 1.5rem;
  border-radius: 52px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 300px;
    height: 300px;
    padding: 2rem;
    margin-right: 1rem;
    border-radius: 22px;
  }
`;
