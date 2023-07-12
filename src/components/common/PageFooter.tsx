import LongFormText from '@components/common/LongFormText';
import { LinkButton, SecondaryButton } from '@elements/Buttons';
import { LinkText, SecondaryText } from '@elements/Typography';
import { EXTERNAL_ROUTES, FOOTER_LINKS, SOCIAL_LINKS } from '@utils/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';

interface PageFooterProps {
  legal: any[];
}

export default function PageFooter({ legal }: PageFooterProps) {
  const [showMore, setShowMore] = useState(false);

  return (
    <SectionWrapper>
      <ContentWrapper>
        <div>
          <Image
            width={270}
            height={80}
            alt={'Nada'}
            src={'/icons/nada-dark.svg'}
          />
          <div
            style={{
              display: 'flex',
              marginBottom: '100px',
              alignSelf: 'flex-end',
              marginTop: '2rem',
            }}
          >
            {SOCIAL_LINKS.map(({ name, link }, idx) => (
              <LinkButton key={idx} href={link} target="blank">
                <Image
                  width={20}
                  height={20}
                  alt={name}
                  src={`/icons/${name.toLowerCase()}.svg`}
                />
              </LinkButton>
            ))}
          </div>
        </div>

        {FOOTER_LINKS.map(({ title, links }, idx) => (
          <div key={idx} style={{ marginBottom: '1rem' }}>
            <SecondaryText style={{ color: 'black' }}>{title}</SecondaryText>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {links.map(({ name, link }, jdx) => (
                <LinkText
                  key={jdx}
                  href={link}
                  style={{ color: '#989898', marginBottom: '1rem' }}
                >
                  {name}
                </LinkText>
              ))}
            </div>
          </div>
        ))}

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Link href={EXTERNAL_ROUTES.APPLE_STORE} target="blank">
            <Image
              width={135}
              height={40}
              alt={'Nada'}
              src={'/images/apple-store.png'}
              style={{ marginBottom: '16px' }}
            />
          </Link>
          <Link href={EXTERNAL_ROUTES.GOOGLE_STORE} target="blank">
            <Image
              width={135}
              height={40}
              alt={'Nada'}
              src={'/images/google-store.png'}
            />
          </Link>
        </div>
      </ContentWrapper>

      <LongFormText content={showMore ? legal : legal.slice(0, 8)} isSmall />

      <div>
        <SecondaryButton
          onClick={() => setShowMore(!showMore)}
          style={{ color: '#48DC95', textDecoration: 'underline' }}
        >
          {showMore ? 'See Less' : 'See More'}
        </SecondaryButton>
      </div>
    </SectionWrapper>
  );
}

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 156px;
  background-color: #fbfbfb;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 48px 24px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;
