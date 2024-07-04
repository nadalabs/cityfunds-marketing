import LongFormText from '@components/common/LongFormText';
import { PrimaryButton } from '@elements/Buttons';
import {
  FlexWrapper,
  SectionWrapper,
  StackWrapper,
} from '@elements/Containers';
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
    image: string;
    legal_url: string;
    button_text: string;
    button_link: string;
  };
}

export default function InvestorPromo({ promo }: InvestorPromoProps) {
  const isMobile = useIsMobile();

  return (
    <SectionWrapper id="investor-promo">
      <FlexWrapper
        style={{
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'center',
          gap: isMobile ? 0 : '4rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '-8rem 0',
          }}
        >
          <div
            style={{
              height: isMobile ? '400px' : '400px',
              minWidth: isMobile ? '90vw' : '400px',
              backgroundColor: '#48DC95',
              borderRadius: '5rem',
              zIndex: -1,
              position: 'relative',
              top: '20rem',
            }}
          />
          <Image
            width={250}
            height={500}
            alt={'Limited time offer!'}
            /* @ts-ignore-next-line */
            src={urlForImage(promo?.image)}
            style={{ position: 'relative', bottom: '15rem' }}
          />
        </div>

        <ContentWrapper>
          <StackWrapper style={{ marginBottom: '1rem' }}>
            <Heading>{promo?.title}</Heading>

            <div>
              <LongFormText content={promo?.description} />
              <LinkText
                href={promo?.legal_url || ''}
                target="_blank"
                style={{
                  color: '#888888',
                  fontSize: '0.875rem',
                  lineHeight: '1rem',
                }}
              >
                *Terms and conditions apply
              </LinkText>
            </div>

            <Link href={promo?.button_link || ''}>
              <PrimaryButton>{promo?.button_text}</PrimaryButton>
            </Link>
          </StackWrapper>
        </ContentWrapper>
      </FlexWrapper>
    </SectionWrapper>
  );
}

export const ContentWrapper = styled.div`
  max-width: 600px;
  margin-right: 84px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-right: 0;
  }
`;
