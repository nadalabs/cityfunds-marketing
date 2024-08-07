'use client';
import { SecondaryButton } from '@elements/Buttons';
import { StackWrapper } from '@elements/Containers';
import {
  Caption,
  Heading,
  LargeText,
  LinkText,
  Overline,
  PrimaryText,
  SmallHeading,
} from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { PortableText } from '@portabletext/react';
import { useState } from 'react';
import styled from 'styled-components';

interface LongFormTextProps {
  title?: string;
  overline?: string;
  content: any;
  isSmall?: boolean;
  isLarge?: boolean;
  isInverted?: boolean;
  isToggle?: boolean;
  isNotWide?: boolean;
}

export default function LongFormText({
  title,
  overline,
  content,
  isSmall,
  isLarge,
  isInverted,
  isToggle,
  isNotWide,
}: LongFormTextProps) {
  const [showMore, setShowMore] = useState(false);
  const isMobile = useIsMobile();

  const components = {
    block: {
      h1: ({ children }: any) => <Heading>{children}</Heading>,
      h2: ({ children }: any) => <SmallHeading>{children}</SmallHeading>,
      h3: ({ children }: any) => <SmallHeading>{children}</SmallHeading>,
      h4: ({ children }: any) => <SmallHeading>{children}</SmallHeading>,
      h5: ({ children }: any) => <SmallHeading>{children}</SmallHeading>,
      h6: ({ children }: any) => <SmallHeading>{children}</SmallHeading>,
      normal: ({ children }: any) => {
        if (isSmall) {
          return (
            <Caption style={{ color: isInverted ? 'white' : '#888888' }}>
              {children}
            </Caption>
          );
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
    types: {
      hardBreak: () => (
        <>
          <br />
          {'\n'}
        </>
      ),
    },
  };

  return (
    <StackWrapper style={{ gap: '1rem' }}>
      {overline && <Overline>{overline}</Overline>}
      {title && <Heading>{title}</Heading>}
      <div style={{ width: !isMobile && isNotWide ? '75%' : '100%' }}>
        {/* @ts-ignore-next-line */}
        <PortableText
          value={isToggle && !showMore ? content.slice(0, 8) : content || []}
          components={components}
        />
      </div>

      {isToggle && (
        <ToggleWrapper>
          <SecondaryButton
            onClick={() => setShowMore(!showMore)}
            style={{ color: '#48DC95', textDecoration: 'underline' }}
          >
            {showMore ? 'See Less' : 'See More'}
          </SecondaryButton>
        </ToggleWrapper>
      )}
    </StackWrapper>
  );
}

const ToggleWrapper = styled.div`
  align-self: flex-start;
  position: relative;
  bottom: 2rem;
`;

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
