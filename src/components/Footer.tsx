import { Caption, LinkText, Text } from '@elements/Typography';
import { LEGALESE } from '@utils/constants';
import Image from 'next/image';
import styled from 'styled-components';

export default function Footer({}) {
  const NAV_LINKS = [
    {
      title: 'Home',
      links: [
        { name: 'Cityfunds', link: '/cityfunds' },
        { name: 'Homeshares', link: '/homeshares' },
        { name: 'Nada Card', link: '/nada-card' },
        { name: 'Mortgage', link: '/mortgage' },
      ],
    },
    {
      title: 'About',
      links: [
        { name: 'FAQs', link: '/faqs' },
        { name: 'Careers', link: '/careers' },
        { name: 'Press', link: '/press' },
        { name: 'Contact', link: '/contact' },
        { name: 'Learn', link: '/learn' },
      ],
    },
    {
      title: 'Transparency',
      links: [
        { name: 'Terms of Use', link: '/terms-of-use' },
        { name: 'Privacy Policy', link: '/privacy-policy' },
        { name: 'Cookie Policy', link: '/cookie-policy' },
        { name: 'Consumer Complaints', link: '/consumer-complaints' },
        { name: 'Nada SEC Filings', link: '/nada-sec-filings' },
        { name: 'Cityfunds SEC Filings', link: '/cityfunds-sec-filings' },
        {
          name: 'Electronic Transfer Disclosure',
          link: '/electronic-transfer-disclosure',
        },
      ],
    },
  ];

  const SOCIAL_LINKS = [
    { name: 'Facebook', link: 'https://www.facebook.com/HelloNadaHomes' },
    { name: 'Twitter', link: 'https://twitter.com/nada_finance' },
    { name: 'Instagram', link: 'https://www.instagram.com/nadafinance' },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/company/hellonada' },
    { name: 'Discord', link: 'https://discord.com/invite/AGhPSkQjYX' },
    { name: 'TikTok', link: 'https://www.tiktok.com/@nadafinance' },
  ];

  return (
    <SectionWrapper>
      <ContentWrapper>
        <Image
          width={322}
          height={92}
          alt={'Nada'}
          src={'/icons/nada-dark.svg'}
        />

        {NAV_LINKS.map(({ title, links }, idx) => (
          <div key={idx}>
            <Text>{title}</Text>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {links.map(({ name, link }, jdx) => (
                <LinkText key={jdx} href={link}>
                  {name}
                </LinkText>
              ))}
            </div>
          </div>
        ))}

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Image
            width={135}
            height={40}
            alt={'Nada'}
            src={'/images/apple-store.png'}
            style={{ marginBottom: '16px' }}
          />
          <Image
            width={135}
            height={40}
            alt={'Nada'}
            src={'/images/google-store.png'}
          />
        </div>
      </ContentWrapper>

      <div
        style={{
          display: 'flex',
          marginBottom: '100px',
          alignSelf: 'flex-end',
        }}
      >
        {SOCIAL_LINKS.map(({ name, link }, idx) => (
          <Image
            key={idx}
            width={28}
            height={28}
            alt={name}
            src={`/icons/${name.toLowerCase()}.svg`}
            style={{ marginRight: '32px', cursor: 'pointer' }}
          />
        ))}
      </div>

      {LEGALESE.split('\n').map((line, i) => (
        <>
          <Caption key={i}>{line}</Caption>
          <br />
        </>
      ))}
    </SectionWrapper>
  );
}

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 156px;
  background-color: #fbfbfb;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 24px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 195px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;
