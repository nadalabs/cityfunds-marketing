import { Heading, Overline, PrimaryText } from '@elements/Typography';
import { OUR_STORY } from '@utils/constants';
import styled from 'styled-components';

export default function OurStory({}) {
  return (
    <SectionWrapper>
      <Overline>We are on a Mission</Overline>
      <Heading>Our Story</Heading>
      {OUR_STORY.split('\n').map((line, i) => (
        <>
          <PrimaryText key={i}>{line}</PrimaryText>
          <br />
        </>
      ))}
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
