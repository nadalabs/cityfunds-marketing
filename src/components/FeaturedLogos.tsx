import { FlexWrapper, SectionWrapper } from '@elements/Containers';
import { LinkText, Overline } from '@elements/Typography';
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
              width={150}
              height={40}
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
      <FlexWrapper style={{ maxWidth: '50%' }}>
        {renderLogos(logos)}
      </FlexWrapper>
    );
  }

  return (
    <SectionWrapper style={{ textAlign: 'center' }}>
      <Overline
        style={{ color: '#989898', textAlign: isHero ? 'left' : 'center' }}
      >
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
  flex-wrap: wrap;
  padding: 0 6rem 2rem 6rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;
