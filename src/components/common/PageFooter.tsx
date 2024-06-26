'use client';
import LongFormText from '@components/common/LongFormText';
import { LinkButton } from '@elements/Buttons';
import { BoldText, LinkText } from '@elements/Typography';
import { FOOTER_LINKS, ICON_LINKS, SOCIAL_LINKS } from '@utils/constants';
import { getCityfundsAppContent, getFooterContent } from 'lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function PageFooter() {
  const [legal, setLegal] = useState('');
  const [footerLinks, setFooterLinks] = useState<any[]>([]);

  useEffect(() => {
    async function fetchFooter() {
      const legal = await getFooterContent();
      setLegal(legal);
    }
    fetchFooter();
  }, []);

  useEffect(() => {
    async function fetchCityfundsApp() {
      const cityfundsApp = await getCityfundsAppContent();

      if (cityfundsApp?.investor_promo?.show_promo) {
        const updatedLinks = [...FOOTER_LINKS];
        updatedLinks[2].links = updatedLinks[2].links.filter(
          (link) => link.name !== 'Rewards Program'
        );
        updatedLinks[2].links.push({
          name: 'Rewards Program',
          link: cityfundsApp?.investor_promo?.legal_url,
          isNewTab: true,
        });
        setFooterLinks(updatedLinks);
      } else {
        setFooterLinks(FOOTER_LINKS);
      }
    }
    fetchCityfundsApp();
  }, []);

  return (
    <FooterWrapper>
      <LinkWrapper>
        <div>
          <Image
            src={'/icons/cityfunds-dark.svg'}
            alt={'Cityfunds'}
            width={270}
            height={80}
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

        {footerLinks.map(({ title, links }, idx) => (
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
              {links.map(({ name, link, isNewTab }, jdx) => (
                <LinkText
                  key={jdx}
                  href={link}
                  target={isNewTab ? '_blank' : '_self'}
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {ICON_LINKS.map(({ name, link, icon }, idx) => (
            <Link href={link} target="blank" key={idx}>
              <Image width={135} height={40} alt={name} src={icon} />
            </Link>
          ))}
        </div>
      </LinkWrapper>

      <LongFormText content={legal} isSmall isToggle />
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

  & > * {
    max-width: 100rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 3rem 1rem;
  }
`;

const LinkWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;
