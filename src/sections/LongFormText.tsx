import { Heading, Overline } from '@elements/Typography';
import { PortableText } from '@portabletext/react';
import styled from 'styled-components';

interface LongFormTextProps {
  title: string;
  overline: string;
  content: any;
}

export default function LongFormText({
  title,
  overline,
  content,
}: LongFormTextProps) {
  return (
    <SectionWrapper>
      <Overline>{overline}</Overline>
      <Heading>{title}</Heading>
      <PortableText value={content} />
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
