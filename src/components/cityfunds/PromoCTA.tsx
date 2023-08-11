import EmailCapture from '@components/common/EmailCapture';
import { Caption, Heading, LargeText, Overline } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { EXTERNAL_ROUTES } from '@utils/constants';
import { urlForImage } from 'lib/sanity';
import Image from 'next/image';
import styled from 'styled-components';

interface PromoCTAProps {
  overline?: string;
  promo?: {
    title: string;
    description: string;
    disclaimer: string;
    image: string;
  };
}

export default function PromoCTA({ overline, promo }: PromoCTAProps) {
  const isMobile = useIsMobile();

  return (
    <SectionWrapper>
      <ContentWrapper>
        {overline && (
          <Overline style={{ marginBottom: '1rem' }}>{overline}</Overline>
        )}
        <Heading>{promo?.title}</Heading>
        <LargeText style={{ marginBottom: '4px' }}>
          {promo?.description}
        </LargeText>
        <Caption style={{ marginBottom: '2rem' }}>{promo?.disclaimer}</Caption>
        <EmailCapture
          btnText="Get Started"
          onClick={() => window.location.replace(EXTERNAL_ROUTES.WEB_APP)}
          formName="Cityfunds Lead"
        />
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
