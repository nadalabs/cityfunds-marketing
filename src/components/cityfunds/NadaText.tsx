import { styled } from 'styled-components';

interface NadaTextProps {
  name: string;
}

export default function NadaText({ name }: NadaTextProps) {
  return (
    <div style={{display: 'flex', alignItems: 'flex-end'}}>
      <HeadingSmall>{name}</HeadingSmall>
      <GreenSquare />
    </div>
  );
}

export const HeadingSmall = styled.h2`
  color: #fff;
  font-family: Poppins;
  font-size: 3.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: -0.00625rem;
  margin: 0;
`;

export const GreenSquare = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 0.6875rem;
  width: 0.6875rem;
  border-radius: 3px;
  margin: 0 0 0.5rem 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 20px;
    width: 20px;
    border-radius: 3px;
    margin-bottom: 14px;
  }
`;