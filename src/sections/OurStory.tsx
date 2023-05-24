import { Heading, Overline, PrimaryText } from '@elements/Typography';
import styled from 'styled-components';

export default function OurStory({}) {
  return (
    <SectionWrapper>
      <Overline>We are on a Mission</Overline>
      <Heading>Our Story</Heading>
      <PrimaryText>
        Nada is an investment, finance, and banking platform that has redefined
        how everyone accesses real estate assets.‍ Nada was founded on the
        belief that the financial system built around real estate assets was far
        too restrictive and unnecessarily complicated. We realized that the
        industry insiders and the wealthy had an unfair advantage. So, we set
        out to level the playing field by creating new financial products with
        transparency and simplicity built into every step.‍ Founded by a couple
        of non-conformists with the experience and grit to break down these
        barriers. Co-founder and CEO John Green spent his 20s as a full-time
        touring & recording punk rocker before his career leading risk and
        strategy within the mortgage industry. Co-founder and CFO Mauricio
        Delgado dropped out of Stanford to start his first company at 19 before
        launching a career spanning Wall Street as CEO of an auto fintech
        company. ‍ Today, Nada is powered by a diverse group of talented and
        purpose-driven people who believe everyone deserves access to real
        estate wealth. We have created financial products enabling everyone to
        access home equity by investing as little as $250 in a single city or
        spending equity on a Visa® debit card. We're not just a company; we're a
        team of people who want to do good in the world.
      </PrimaryText>
    </SectionWrapper>
  );
}

export const SectionWrapper = styled.div`
  padding: 100px 150px;
  max-width: 1070px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 24px;
  }
`;
