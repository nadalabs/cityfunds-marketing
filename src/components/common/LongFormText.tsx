import {
  Caption,
  Heading,
  LinkText,
  Overline,
  PrimaryText,
} from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { PortableText } from '@portabletext/react';

interface LongFormTextProps {
  title?: string;
  overline?: string;
  content: any;
  isSmall?: boolean;
}

export default function LongFormText({
  title,
  overline,
  content,
  isSmall,
}: LongFormTextProps) {
  const isMobile = useIsMobile();

  const components = {
    block: {
      normal: ({ children }) => {
        if (isSmall) {
          return <Caption>{children}</Caption>;
        } else {
          return <PrimaryText>{children}</PrimaryText>;
        }
      },
    },
    list: {
      bullet: ({ children }) => {
        if (isSmall) {
          return <Caption>{children}</Caption>;
        } else {
          return <PrimaryText>{children}</PrimaryText>;
        }
      },
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <LinkText
            href={value.href}
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: isSmall || isMobile ? '14px' : '18px',
              color: '#48DC95',
              margin: 0,
            }}
          >
            {children}
          </LinkText>
        );
      },
    },
  };

  return (
    <>
      {overline && <Overline>{overline}</Overline>}
      {title && <Heading>{title}</Heading>}
      <div style={{ width: isSmall || isMobile ? '100%' : '66%' }}>
        {/* @ts-ignore-next-line */}
        <PortableText value={content || []} components={components} />
      </div>
    </>
  );
}
