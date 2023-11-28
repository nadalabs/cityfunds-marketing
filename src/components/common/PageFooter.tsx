import LongFormText from '@components/common/LongFormText';
import { LinkButton, SecondaryButton } from '@elements/Buttons';
import { BoldText, LinkText } from '@elements/Typography';
import { FOOTER_LINKS, ICON_LINKS, SOCIAL_LINKS } from '@utils/constants';
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
    <FooterWrapper>
      <ContentWrapper>
        <LinkWrapper>
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
              <BoldText
                style={{
                  fontSize: '1rem',
                  color: 'black',
                  marginBottom: '0.5rem',
                }}
              >
                {title}
              </BoldText>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {links.map(({ name, link }, jdx) => (
                  <LinkText
                    key={jdx}
                    href={link}
                    style={{
                      fontSize: '1rem',
                      color: '#989898',
                      marginBottom: '1rem',
                    }}
                  >
                    {name}
                  </LinkText>
                ))}
              </div>
            </div>
          ))}

          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            {ICON_LINKS.map(({ name, link, icon }, idx) => (
              <Link href={link} target="blank" key={idx}>
                <Image width={135} height={40} alt={name} src={icon} />
              </Link>
            ))}
          </div>
        </LinkWrapper>

        <LongFormText content={showMore ? legal : legal.slice(0, 8)} isSmall />
        <div>
          <SecondaryButton
            onClick={() => setShowMore(!showMore)}
            style={{ color: '#48DC95', textDecoration: 'underline' }}
          >
            {showMore ? 'See Less' : 'See More'}
          </SecondaryButton>
        </div>
      </ContentWrapper>
    </FooterWrapper>
  );
}

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6.25rem;
  background-color: #fbfbfb;
  padding: 6.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 3rem 1rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 100rem;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;
