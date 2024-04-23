'use client';
import { PrimaryText } from '@elements/Typography';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

interface HeroBannerProps {
  primaryText: string;
  link: string;
  isStatic?: boolean;
}

export default function HeroBanner({
  primaryText,
  link,
  isStatic,
}: HeroBannerProps) {
  if (isStatic) {
    return (
      <BannerWrapper $isStatic>
        <PrimaryText style={{ color: 'white' }}>{primaryText}</PrimaryText>
      </BannerWrapper>
    );
  }

  return (
    <Link href={link} target="_blank">
      <BannerWrapper>
        <PrimaryText style={{ color: 'white' }}>{primaryText}</PrimaryText>
        <Image
          src={'/icons/arrow-light.svg'}
          alt={'Learn More'}
          style={{ transform: 'rotate(-90deg)', marginLeft: '1rem' }}
          width={16}
          height={16}
        />
      </BannerWrapper>
    </Link>
  );
}

const BannerWrapper = styled.div<{ $isStatic?: boolean }>`
  transition: ${({ theme }) => theme.transitions.ease};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #48dc95;
  border-radius: 0.5rem;
  padding: 0.625rem 1.25rem;
  margin-top: 0.5rem;

  &:hover {
    background-color: ${({ $isStatic }) => ($isStatic ? '#48dc95' : '#2a8356')};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;
