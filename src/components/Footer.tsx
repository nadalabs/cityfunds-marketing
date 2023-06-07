import { LinkButton } from '@elements/Buttons';
import { Caption, LinkText, SecondaryText } from '@elements/Typography';
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
          <div key={idx}>
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

      {/* <LongFormText
        overline={data.post.tag}
        title={data.post.title}
        content={data.post.content}
      /> */}

      <Caption>
        © 2023 Nada Holdings, Inc. and/or its affiliates. All rights reserved.
        Nada is a registered service mark of Nada Holdings, Inc.
      </Caption>

      <Caption>
        Nada Holdings, Inc. ("Nada"), as a manager of Cityfunds I, LLC
        (“Cityfunds”) operates the www.nada.co website (the "site") and the
        mobile-based app (the "App") and is not a broker-dealer or investment
        advisor. All securities ("Shares") related activity is conducted through
        Dalmore Group LLC, a registered broker-dealer and member of FINRA/SIPC,
        located at 525 Green Place, Woodmere, NY 11598. You can review the
        brokercheck for Dalmore.
      </Caption>

      <Caption>
        You should speak with your financial advisor, accountant and/or attorney
        when evaluating any offering. Neither Nada, Cityfunds, nor Dalmore makes
        any recommendations or provides advice about investments, and no
        communication, through this website or in any other medium, should be
        construed as a recommendation for any security offered on or off this
        investment platform. The Site may make forward-looking statements. You
        should not rely on these statements but should carefully evaluate the
        offering materials in assessing any investment opportunity, including
        the complete set of risk factors that are provided as part of the
        offering circular for your consideration.
      </Caption>
      <Caption>
        Cityfunds is conducting public offerings pursuant to Regulation A, as
        amended, through the Site and App. The offering circular for Cityfunds
        is available. Past performance is no guarantee of future results.
        Investments such as those on the Nada platform are speculative and
        involve substantial risks to consider before investing, outlined in the
        respective offering materials and including, but not limited to,
        illiquidity, lack of diversification and complete loss of capital. Key
        risks include, but are not limited to, limited operating history,
        limited diversification, risk of asset damage or theft and lack of
        voting rights. Also, the adverse economic effects of the COVID-19
        pandemic remain unknown and could materially impact this investment. An
        investment in an offering constitutes only an investment in a particular
        series and not in Cityfunds or the underlying asset(s). Investors should
        carefully review the risks located in the respective offering materials
        for a more comprehensive discussion of risk.
      </Caption>
      <Caption>
        From time to time, Cityfunds will seek to qualify additional series
        offerings of securities under Regulation A. For offerings that have not
        yet been qualified, no money or other consideration is being solicited
        and, if sent in response, will not be accepted. No offer to buy
        securities of a particular offering can be accepted, and no part of the
        purchase price can be received until an offering statement filed with
        the Securities and Exchange Commission (the "SEC") relating to that
        series has been qualified by the SEC. Any such offer may be withdrawn or
        revoked, without obligation or commitment of any kind, at any time
        before notice of acceptance given after the date of qualification by the
        SEC. An indication of interest involves no obligation or commitment of
        any kind.
      </Caption>
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
