import { Overline } from '@elements/Typography';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

interface FeaturedLogosProps {
  overline: string;
  logos: any[];
}

export default function FeaturedLogos({ overline, logos }: FeaturedLogosProps) {
  return (
    <SectionWrapper>
      <Overline style={{ color: '#989898', textAlign: 'center' }}>
        {overline}
      </Overline>
      <ContentWrapper>
        {logos.map(({ name, imageUrl, link }) => (
          <Link key={name} href={link} target="_blank">
            <Image
              width={145}
              height={40}
              alt={name}
              src={imageUrl}
            />
          </Link>
        ))}
      </ContentWrapper>
    </SectionWrapper>
  );
}

const SectionWrapper = styled.div`
  padding: 76px 156px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 24px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
    height: 400px;
  }
`;
