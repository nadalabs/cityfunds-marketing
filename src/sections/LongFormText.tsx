import { SectionWrapper } from '@elements/Containers';
import { Heading, Overline } from '@elements/Typography';
import { PortableText } from '@portabletext/react';

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
      <PortableText value={content || []} />
    </SectionWrapper>
  );
}
