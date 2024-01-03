import styled from 'styled-components';

export const SectionWrapper = styled.div<{ isBackground?: boolean }>`
  padding: 6.25rem;
  background: ${({ isBackground }) =>
    isBackground
      ? 'linear-gradient(0deg, rgba(42, 131, 86, 0.05) 0%, rgba(42, 131, 86, 0.05) 100%), #FFF'
      : 'none'};

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: 6.25rem 16rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 3rem 1.5rem;
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

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  gap: 2rem;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const TopWrapper = styled.div`
  opacity: 1;
  -webkit-transition: opacity 0.5s ease-in-out;
  -moz-transition: opacity 0.5s ease-in-out;
  -o-transition: opacity 0.5s ease-in-out;
  -ms-transition: opacity 0.5s ease-in-out;
  transition: opacity 0.5s ease-in-out;

  &:hover {
    opacity: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    &:hover {
      opacity: 1;
    }
  }
`;

export const BottomWrapper = styled.div`
  position: relative;
  bottom: 18rem;
  z-index: -1;
  height: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    bottom: 10rem;
  }
`;

export const SliderWrapper = styled.div`
  position: relative;
  right: 1rem;
  bottom: 1rem;
`;

export const FundWrapper = styled.div`
  box-shadow: 1.5px 1.5px 25px 0px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  border-radius: 2rem;
  height: 18rem;
  width: inherit;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 10rem;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  border-radius: 2rem;
  overflow: hidden;
  width: inherit;
  height: inherit;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 40%,
      rgba(0, 0, 0, 0.25) 60%,
      rgba(0, 0, 0, 0.5) 80%
    );
  }
`;

export const InnerWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  bottom: 18rem;
  padding: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    bottom: 10rem;
  }
`;

export const TickerWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 0.25rem;
  }
`;

export const FadeWrapper = styled.div<{ isActive?: boolean }>`
  transition: ${({ theme }) => theme.transitions.ease};
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
`;
