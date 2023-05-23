import { Overline } from '@elements/Typography';
import Image from 'next/image';
import styled from 'styled-components';

export default function FeaturedPublicity({}) {
  const FEATURED = [
    { name: 'Forbes', imageUrl: '/icons/forbes.svg', link: '' },
    { name: 'The Motley Fool', imageUrl: '/icons/motley-fool.svg', link: '' },
    { name: 'TechCrunch', imageUrl: '/icons/techcrunch.svg', link: '' },
    { name: 'Yahoo Finance', imageUrl: '/icons/yahoo-finance.svg', link: '' },
  ];

  return (
    <SectionWrapper>
      <Overline style={{ color: '#989898', textAlign: 'center' }}>
        Featured In
      </Overline>
      <ContentWrapper>
        {FEATURED.map(({ name, imageUrl, link }) => (
          <Image key={name} width={145} height={40} alt={name} src={imageUrl} />
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
