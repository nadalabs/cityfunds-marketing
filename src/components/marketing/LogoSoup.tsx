'use client';
import { FlexWrapper, SectionWrapper } from '@elements/Containers';
import { LinkText, Overline } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { urlForImage } from 'lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

interface LogoSoupProps {
  overline: string;
  logos: any[];
  isHero?: boolean;
  seeMore?: boolean;
}

export default function LogoSoup({
  overline,
  logos,
  isHero,
  seeMore,
}: LogoSoupProps) {
  const isMobile = useIsMobile();

  function renderLogos(logos: any[], isMargin?: boolean) {
    return (
      <>
        {logos?.map(({ name, image, link }, idx) => (
          <Link
            key={idx}
            href={link}
            target="_blank"
            style={{ margin: isMargin ? '1rem 1rem' : 0 }}
          >
            <Image
              width={isMobile ? 140 : isHero ? 200 : 150}
              height={isMobile ? 32 : isHero ? 40 : 40}
              alt={name}
              src={urlForImage(image)}
            />
          </Link>
        ))}
      </>
    );
  }

  if (isHero) {
    return (
      <div style={{ maxWidth: '100%' }}>
        <Overline
          style={{
            color: '#989898',
            textAlign: isMobile ? 'center' : 'left',
            marginBottom: '1rem',
          }}
        >
          {overline}
        </Overline>
        <FlexWrapper style={{ flexWrap: isMobile ? 'wrap' : 'initial' }}>
          {renderLogos(logos)}
        </FlexWrapper>
      </div>
    );
  }

  return (
    <SectionWrapper style={{ textAlign: 'center' }}>
      <Overline style={{ color: '#989898', textAlign: 'center' }}>
        {overline}
      </Overline>
      <ContentWrapper>{renderLogos(logos, true)}</ContentWrapper>

      {seeMore && (
        <div style={{ paddingLeft: '1.25rem' }}>
          <LinkText href="/press">See More</LinkText>
        </div>
      )}
    </SectionWrapper>
  );
}

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 6rem 2rem 6rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    padding: 0;
  }
`;
