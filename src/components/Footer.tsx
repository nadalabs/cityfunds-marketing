import { LinkButton, SecondaryButton } from '@elements/Buttons';
import { Caption, LinkText, SecondaryText } from '@elements/Typography';
import { EXTERNAL_ROUTES, FOOTER_LINKS, SOCIAL_LINKS } from '@utils/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';

export default function Footer({}) {
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

      {showMore && (
        <div>
          <Caption>
            Investment overviews contained herein contain summaries of the
            purpose and the principal business terms of the investment
            opportunities. Such summaries are intended for informational
            purposes only and do not purport to be complete, and each is
            qualified in its entirety by reference to the more-detailed
            discussions contained in the respective offering circular filed with
            the SEC.
          </Caption>
          <Caption>
            Cityfunds does not offer refunds after an investment has been made.
            Please review the relevant offering materials and subscription
            documentation for more information.
          </Caption>
          <Caption>
            All Shares will be issued in electronic form only and will not be
            listed or quoted on any securities exchange. We expect that after a
            Series’ offering has concluded, the Public Private Execution Network
            Alternative Trading System, or PPEX ATS (the “Secondary Trading
            Platform”), which is registered with the SEC and operated by North
            Capital Private Securities Corporation (“North Capital”), will be a
            venue available for the resale of such Shares through Dalmore, as a
            broker-dealer member of the Secondary Trading Platform; provided,
            however, any such resale of Shares will be subject to federal and
            state securities laws and the restrictions in the Series’ Operating
            Agreement, and there can be no assurance that an active market for
            any Shares will develop on the Secondary Trading Platform, that the
            Secondary Trading Platform will be available to allow resales of
            Shares to residents of all states, or that the Secondary Trading
            Platform will be available at all. For these reasons, investors must
            be prepared to hold their Shares indefinitely.
          </Caption>
          <Caption>
            Cityfunds I, LLC is a Delaware series limited liability company,
            formed to enable public investment in residential real estate
            properties in specific cities. A separate series of the Company will
            be formed to invest in the properties in each such city, either
            directly or through our “Homeshares” product, and each series
            intends to sell membership interests in the series to investors
            through a potential under Tier II of Regulation A of the Securities
            Act. As a Delaware series limited liability company, the debts,
            liabilities, obligations, and expenses incurred, contracted for or
            otherwise existing with respect to a particular series are
            segregated and enforceable only against the assets of such series,
            as provided under Delaware law.
          </Caption>
          <Caption>
            Cityfunds I, LLC is managed by Cityfunds Manager, LLC, a joint
            venture between Nada Asset Management LLC, or Nada (the Managing
            Member), and Compound Asset Management LLC. Pursuant to the terms of
            the Company’s Limited Liability Company Agreement dated as of April
            26, 2021, or the Operating Agreement, the Manager will provide
            certain management, advisory, and support services to the Company
            and to each series and its subsidiaries. Nada Holdings, Inc.
            (“Nada”) has a business relationship with Nada Loans, LLC, Nada
            Realty LLC, Nada Investments LLC, Nada Home Services, LLC, Nada
            Insured LLC, and Cityfunds Manager, LLC. (collectively, the
            “Affiliates”). Learn more about Affiliated Businesses.
          </Caption>
          <Caption>
            Securities are offered through Finalis Securities LLC Member FINRA /
            SIPC. Nada Holdings, Inc is not a registered broker-dealer, and
            Finalis Securities LLC and Nada Holdings, Inc are separate,
            unaffiliated entities. Finalis Privacy Policy | Finalis Business
            Continuity Plan | FINRA BrokerCheck
          </Caption>
          <Caption>
            www.nada.co (the "Nada Website") is a website operated by Nada
            Holdings, Inc, a privately held Delaware Corporation. Nada Holding,
            Inc is an issuer of securities and provide services associated with
            the sales and management of said securities.
          </Caption>
          <Caption>
            Nada Holdings, Inc. (“Nada”) is a financial technology company and
            is not a bank. Banking services are provided by Nada's banking
            partners. The Nada Debit Card is issued by Nada's banking partners.
          </Caption>
          <Caption>
            Nada Realty is a licensed Texas Real Estate LLC Brokerage TREC#
            9007703. TREC: Information About Brokerage Services | Consumer
            Protection Notice.
          </Caption>
          <Caption>
            Nada Loans is a licensed Mortgage Company NMLS# 1993600. NMLS
            Consumer Access.
          </Caption>
          <Caption>
            HPI: The Home Price Index (“HPI”) value is defined as a measure of
            changes in single-family home prices over time and is provided by
            HouseCanary. The HPI values displayed are based on the HouseCanary
            HPI data for a specific Metropolitan Statistical Area (MSA). The HPI
            values have no association with any real estate investment
            offering(s) associated with Nada Holdings, Inc., Cityfunds I, LLC,
            and/or any affiliates.
          </Caption>
          <Caption>
            DISCLAIMER: THESE OFFERING MATERIALS MAY CONTAIN FORWARD-LOOKING
            STATEMENTS AND INFORMATION RELATING TO, AMONG OTHER THINGS, THE
            COMPANY, ITS BUSINESS PLAN AND STRATEGY, AND ITS INDUSTRY. THESE
            FORWARDLOOKING STATEMENTS ARE BASED ON THE BELIEFS OF, ASSUMPTIONS
            MADE BY, AND INFORMATION CURRENTLY AVAILABLE TO THE COMPANY’S
            MANAGEMENT. WHEN USED IN THE OFFERING MATERIALS, THE WORDS
            “ESTIMATE,” “PROJECT,” “BELIEVE,” “ANTICIPATE,” “INTEND,” “EXPECT”
            AND SIMILAR EXPRESSIONS ARE INTENDED TO IDENTIFY FORWARD-LOOKING
            STATEMENTS. THESE STATEMENTS REFLECT MANAGEMENT’S CURRENT VIEWS WITH
            RESPECT TO FUTURE EVENTS AND ARE SUBJECT TO RISKS AND UNCERTAINTIES
            THAT COULD CAUSE THE COMPANY’S ACTUAL RESULTS TO DIFFER MATERIALLY
            FROM THOSE CONTAINED IN THE FORWARD-LOOKING STATEMENTS. INVESTORS
            ARE CAUTIONED NOT TO PLACE UNDUE RELIANCE ON THESE FORWARD-LOOKING
            STATEMENTS, WHICH SPEAK ONLY AS OF THE DATE ON WHICH THEY ARE MADE.
            THE COMPANY DOES NOT UNDERTAKE ANY OBLIGATION TO REVISE OR UPDATE
            THESE FORWARD-LOOKING STATEMENTS TO REFLECT EVENTS OR CIRCUMSTANCES
            AFTER SUCH DATE OR TO REFLECT THE OCCURRENCE OF UNANTICIPATED
            EVENTS.
          </Caption>
          <Caption>
            PLEASE NOTE INVESTORS IN THIS OFFERING WILL BE CLIENTS OF THE ISSUER
            AND NOT DALMORE GROUP, LLC (“DALMORE”), A REGISTERED BROKER-DEALER
            AND MEMBER FINRA/SIPC. DALMORE’S ROLE IN THE TRANSACTION IS TO
            FACILITATE BACK OFFICE AND REGULATORY FUNCTIONS RELATED TO THE
            REGULATION A TRANSACTION, AND ACTS ONLY AS THE BROKER/DEALER OF
            RECORD FOR THE OFFERING LISTED. DALMORE IS NOT PROVIDING INVESTMENT
            ADVICE OR RECOMMENDATIONS, OR LEGAL OR TAX ADVICE. NO MONEY OR OTHER
            CONSIDERATION IS BEING SOLICITED, AND IF SENT IN RESPONSE, WILL NOT
            BE ACCEPTED. NO OFFER TO BUY THE SECURITIES CAN BE ACCEPTED AND NO
            PART OF THE PURCHASE PRICE CAN BE RECEIVED UNTIL THE OFFERING
            STATEMENT FILED BY THE COMPANY WITH THE SEC HAS BEEN QUALIFIED BY
            THE SEC. ANY SUCH OFFER MAY BE WITHDRAWN OR REVOKED, WITHOUT
            OBLIGATION OR COMMITMENT OF ANY KIND, AT ANY TIME BEFORE NOTICE OF
            ACCEPTANCE GIVEN AFTER THE DATE OF QUALIFICATION. AN INDICATION OF
            INTEREST INVOLVES NO OBLIGATION OR COMMITMENT OF ANY KIND.
          </Caption>
          <Caption>
            AN OFFERING STATEMENT REGARDING THIS OFFERING HAS BEEN FILED WITH
            THE SEC. YOU MAY OBTAIN A COPY OF THE PRELIMINARY OFFERING CIRCULAR
            THAT IS PART OF THAT OFFERING STATEMENT. AN OFFERING STATEMENT
            REGARDING THIS OFFERING HAS BEEN FILED WITH THE SEC. THE SEC HAS
            QUALIFIED THAT OFFERING STATEMENT, WHICH ONLY MEANS THAT THE COMPANY
            MAY MAKE SALES OF THE SECURITIES DESCRIBED BY THE OFFERING
            STATEMENT. IT DOES NOT MEAN THAT THE SEC HAS APPROVED, PASSED UPON
            THE MERITS OR PASSED UPON THE ACCURACY OR COMPLETENESS OF THE
            INFORMATION IN THE OFFERING STATEMENT. THE OFFERING CIRCULAR THAT IS
            PART OF THAT OFFERING STATEMENT IS AT: THIS LINK
          </Caption>
        </div>
      )}

      <div>
      <SecondaryButton onClick={() => setShowMore(!showMore)} style={{color: '#48DC95', textDecoration: 'underline'}}>
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
