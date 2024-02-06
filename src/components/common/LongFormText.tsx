'use client';
import { StackWrapper } from '@elements/Containers';
import {
  Caption,
  Heading,
  LargeText,
  LinkText,
  Overline,
  PrimaryText,
} from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { PortableText } from '@portabletext/react';
import styled from 'styled-components';

interface LongFormTextProps {
  title?: string;
  overline?: string;
  content: any;
  isSmall?: boolean;
  isLarge?: boolean;
  isInverted?: boolean;
}

export default function LongFormText({
  title,
  overline,
  content,
  isSmall,
  isLarge,
  isInverted,
}: LongFormTextProps) {
  const isMobile = useIsMobile();

  const components = {
    block: {
      normal: ({ children }: any) => {
        if (isSmall) {
          return <Caption>{children}</Caption>;
        } else if (isLarge) {
          return <LargeText>{children}</LargeText>;
        } else {
          return (
            <PrimaryText style={{ color: isInverted ? 'white' : '#888888' }}>
              {children}
            </PrimaryText>
          );
        }
      },
      blockquote: ({ children }: any) => {
        return <QuoteText>{children}</QuoteText>;
      },
    },
    list: {
      bullet: ({ children }: any) => {
        if (isSmall) {
          return <ul style={{ marginLeft: '1rem' }}>{children}</ul>;
        } else {
          return <ul style={{ marginLeft: '1rem' }}>{children}</ul>;
        }
      },
      number: ({ children }: any) => {
        if (isSmall) {
          return <ol style={{ marginLeft: '1rem' }}>{children}</ol>;
        } else {
          return <ol style={{ marginLeft: '1rem' }}>{children}</ol>;
        }
      },
    },
    listItem: {
      bullet: ({ children }: any) => {
        if (isSmall) {
          return (
            <Caption>
              <li style={{ listStyleType: 'disc' }}>{children}</li>
            </Caption>
          );
        } else {
          return (
            <PrimaryText>
              <li style={{ listStyleType: 'disc' }}>{children}</li>
            </PrimaryText>
          );
        }
      },
      number: ({ children }: any) => {
        if (isSmall) {
          return (
            <Caption>
              <li style={{ listStyleType: 'decimal' }}>{children}</li>
            </Caption>
          );
        } else {
          return (
            <PrimaryText>
              <li style={{ listStyleType: 'decimal' }}>{children}</li>
            </PrimaryText>
          );
        }
      },
    },
    marks: {
      link: ({ children, value }: any) => {
        return (
          <LinkText
            href={value.href}
            target="_blank"
            style={{
              fontSize: isSmall || isMobile ? '14px' : '16px',
              lineHeight: isSmall || isMobile ? '1rem' : '150%',
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
    <StackWrapper style={{ gap: '1rem' }}>
      {overline && <Overline>{overline}</Overline>}
      {title && <Heading>{title}</Heading>}
      <div style={{ width: '100%' }}>
        {/* @ts-ignore-next-line */}
        <PortableText value={content || []} components={components} />
      </div>
    </StackWrapper>
  );
}

const QuoteText = styled(Heading)`
  height: 420px;
  font-size: 3rem;
  line-height: 125%;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 400px;
    font-size: 32px;
    line-height: 40px;
  }
`;
