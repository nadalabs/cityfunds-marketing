import { LinkButton } from '@elements/Buttons';
import { LinkText, TertiaryHeading } from '@elements/Typography';
import { EXTERNAL_ROUTES, FOOTER_LINKS, SOCIAL_LINKS } from '@utils/constants';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export default function Footer({}) {
  return (
    <SectionWrapper>
      <ContentWrapper>
        <div>
          <Image
            width={322}
            height={92}
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
                  width={28}
                  height={28}
                  alt={name}
                  src={`/icons/${name.toLowerCase()}.svg`}
                />
              </LinkButton>
            ))}
          </div>
        </div>

        {FOOTER_LINKS.map(({ title, links }, idx) => (
          <div key={idx}>
            <TertiaryHeading>{title}</TertiaryHeading>
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

      {/* <LongFormText
        overline={data.post.tag}
        title={data.post.title}
        content={data.post.content}
      /> */}
    </SectionWrapper>
  );
}

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 156px;
  background-color: #fbfbfb;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 24px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 195px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;
