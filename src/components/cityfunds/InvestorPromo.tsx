import LongFormText from '@components/common/LongFormText';
import { PrimaryButton } from '@elements/Buttons';
import { StackWrapper } from '@elements/Containers';
import { Heading, LinkText } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { urlForImage } from 'lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

interface InvestorPromoProps {
  promo?: {
    title: string;
    description: string;
    disclaimer: string;
    image: string;
  };
}

export default function InvestorPromo({ promo }: InvestorPromoProps) {
  const isMobile = useIsMobile();

  return (
    <SectionWrapper id="promo">
      <ContentWrapper>
        <StackWrapper style={{ gap: '0.5rem', marginBottom: '1rem' }}>
          <Heading style={{ maxWidth: '34rem' }}>{promo?.title}</Heading>
          <LongFormText content={promo?.description} />
          <LinkText
            href="/rewards-program"
            style={{
              color: '#888888',
              fontSize: '0.875rem',
              lineHeight: '1rem',
            }}
          >
            *Terms and conditions apply
          </LinkText>
        </StackWrapper>
        <Link href={process.env.NEXT_PUBLIC_WEB_APP_URL} target="_blank">
          <PrimaryButton>Invest Now</PrimaryButton>
        </Link>
      </ContentWrapper>

      {!isMobile && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '35%',
            position: 'relative',
            left: '100px',
          }}
        >
          <div
            style={{
              height: '400px',
              minWidth: '400px',
              backgroundColor: '#48DC95',
              borderRadius: '120px',
              zIndex: -1,
              position: 'absolute',
              top: '150px',
              left: '-80px',
            }}
          />
          <Image
            width={250}
            height={500}
            alt={'Limited time offer!'}
            src={urlForImage(promo?.image).url()}
          />
        </div>
      )}
    </SectionWrapper>
  );
}

export const SectionWrapper = styled.div`
  padding: 76px 156px 147px 156px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 24px;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 700px;
  margin-right: 84px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-right: 0;
  }
`;
