import { SectionWrapper } from '@elements/Containers';
import { Heading, LinkText } from '@elements/Typography';
import { ICityfund, REGULATION } from '@utils/models';
import { useState } from 'react';
import styled from 'styled-components';
import { HeadingSmall } from './NadaText';

interface DocumentCenterProps {
  funds: ICityfund[];
}

export default function DocumentCenter({ funds }: DocumentCenterProps) {
  const [active, setActive] = useState(0);

  const allDocuments = funds.map(({ name, information, documents }) => ({
    name:
      information.regulation === REGULATION.REG_D
        ? `${name} Fund`
        : `${name} Cityfund`,
    documents: [
      { label: 'Offering Memorandum', value: documents.offeringMemorandum },
      {
        label: 'Subscription Agreement',
        value: documents.subscriptionAgreement,
      },
      { label: 'Executive Summary', value: documents.executiveSummary },
      { label: 'One Sheet', value: documents.oneSheet },
    ],
  }));

  return (
    <SectionWrapper>
      <Heading style={{ marginBottom: '2rem' }}>Docs</Heading>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {allDocuments.map(({ name, documents }, idx) => (
          <ContentWrapper key={idx}>
            <HoverHeading
              onClick={() => setActive(idx)}
              style={{
                color: active === idx ? '#48DC95' : 'black',
                marginBottom: active === idx ? '0' : '2rem',
              }}
            >
              {name}
            </HoverHeading>

            {active === idx && (
              <div style={{ marginBottom: '1rem' }}>
                {documents.map(({ value, label }, kdx) => (
                  <LinkText
                    key={kdx}
                    href={value}
                    target="_blank"
                    style={{ display: 'block', margin: '0 0 1rem 1.5rem' }}
                  >
                    {label}
                  </LinkText>
                ))}
              </div>
            )}
          </ContentWrapper>
        ))}
      </div>
    </SectionWrapper>
  );
}

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-basis: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-basis: 100%;
  }
`;

export const HoverHeading = styled(HeadingSmall)`
  transition: ${({ theme }) => theme.transitions.ease};
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.lightGrey};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    font-size: 3rem;
    line-height: 3.5rem;
  }
`;

export const TextWrapper = styled(Heading)`
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 100%;
  }
`;
