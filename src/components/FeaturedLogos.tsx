import { FlexWrapper, SectionWrapper } from '@elements/Containers';
import { LinkText, Overline } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { urlForImage } from 'lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

interface FeaturedLogosProps {
  overline: string;
  logos: any[];
  isHero?: boolean;
  seeMore?: boolean;
}

export default function FeaturedLogos({
  overline,
  logos,
  isHero,
  seeMore,
}: FeaturedLogosProps) {
  const isMobile = useIsMobile();

  function renderLogos(logos) {
    return (
      <>
        {logos?.map(({ name, image, link }, idx) => (
          <Link
            key={idx}
            href={link}
            target="_blank"
            style={{ margin: '1rem 1rem' }}
          >
            <Image
              width={isMobile ? 120 : 150}
              height={isMobile ? 32 : 40}
              alt={name}
              src={urlForImage(image).url()}
            />
          </Link>
        ))}
      </>
    );
  }

  if (isHero) {
    return (
      <div style={{ maxWidth: isMobile ? '100%' : '70%' }}>
        <Overline
          style={{ color: '#989898', textAlign: isMobile ? 'center' : 'left' }}
        >
          {overline}
        </Overline>
        <FlexWrapper style={{ flexWrap: 'wrap' }}>
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
      <ContentWrapper>{renderLogos(logos)}</ContentWrapper>

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
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`;
