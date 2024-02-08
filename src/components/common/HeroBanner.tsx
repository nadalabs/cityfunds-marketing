'use client';
import { PrimaryText } from '@elements/Typography';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

interface HeroBannerProps {
  primaryText: string;
  link: string;
}

export default function HeroBanner({ primaryText, link }: HeroBannerProps) {
  return (
    <Link href={link} target="_blank">
      <BannerWrapper>
        <PrimaryText style={{ color: 'white' }}>{primaryText}</PrimaryText>
        <Image
          src={'/icons/arrow-light.svg'}
          alt={'Learn More'}
          style={{ transform: 'rotate(-90deg)' }}
          width={16}
          height={16}
        />
      </BannerWrapper>
    </Link>
  );
}

const BannerWrapper = styled.div`
  transition: ${({ theme }) => theme.transitions.ease};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #48dc95;
  border-radius: 0.5rem;
  padding: 0.625rem 1.25rem;

  &:hover {
    background-color: #2a8356;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;
