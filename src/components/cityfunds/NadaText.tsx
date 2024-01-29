import styled from 'styled-components';

interface NadaTextProps {
  name: string;
  isDark?: boolean;
  size?: 'small' | 'extraSmall';
}

export default function NadaText({ name, isDark, size }: NadaTextProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
      }}
    >
      <NadaHeading
        style={{
          color: isDark ? '#303030' : '#FFFFFF',
          fontSize:
            size === 'extraSmall'
              ? '2rem'
              : size === 'small'
                ? '2.5rem'
                : '3.125rem',
          width: 'inherit',
        }}
      >
        {name}
      </NadaHeading>
      <GreenSquare />
    </div>
  );
}

export const NadaHeading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.main};
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
  height: 0.75rem;
  width: 0.75rem;
  border-radius: 3px;
  margin: 0 0 0.5rem 0.5rem;
`;
