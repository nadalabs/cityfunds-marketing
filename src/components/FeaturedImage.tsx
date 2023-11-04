import LongFormText from '@components/common/LongFormText';
import { PrimaryButton } from '@elements/Buttons';
import { SectionWrapper, StackWrapper } from '@elements/Containers';
import { Heading } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { urlForImage } from 'lib/sanity';
import Image from 'next/image';
import styled from 'styled-components';

interface FeaturedImageProps {
  feature: {
    title: string;
    description: string;
    image: string;
  };
  btnText: string;
  onClick: () => void;
  isReversed?: boolean;
  isWide?: boolean;
}

export default function FeaturedImage({
  feature,
  btnText,
  onClick,
  isReversed,
}: FeaturedImageProps) {
  const isMobile = useIsMobile();

  return (
    <SectionWrapper
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: isMobile
          ? 'column-reverse'
          : isReversed
          ? 'row-reverse'
          : 'row',
        gap: '2.5rem',
      }}
    >
      <ContentWrapper>
        <StackWrapper style={{ gap: '1rem' }}>
          <Heading>{feature?.title}</Heading>
          <LongFormText content={feature?.description} />
          <div>
            <PrimaryButton onClick={onClick}>{btnText}</PrimaryButton>
          </div>
        </StackWrapper>
      </ContentWrapper>

      <Image
        width={isMobile ? 300 : 704}
        height={isMobile ? 300 : 560}
        alt={feature?.title}
        src={urlForImage(feature?.image).url()}
      />
    </SectionWrapper>
  );
}

export const ContentWrapper = styled.div`
  width: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-right: 0;
  }
`;
