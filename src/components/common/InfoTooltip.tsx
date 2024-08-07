import DefaultDrawer from '@components/common/DefaultDrawer';
import LongFormText from '@components/common/LongFormText';
import { Caption, PrimaryText, SmallHeading } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import Image from 'next/image';
import { ReactNode, useState } from 'react';
import styled from 'styled-components';

interface InfoTooltipProps {
  label: ReactNode;
  description: any;
  hideIcon?: boolean;
  isActive?: boolean;
  isBold?: boolean;
  isSmall?: boolean;
}

export default function InfoTooltip({
  label,
  description,
  hideIcon,
  isActive,
  isBold,
  isSmall,
}: InfoTooltipProps) {
  const [active, setActive] = useState(false);
  const isMobile = useIsMobile();

  function renderTooltip() {
    if (active && !isMobile) {
      return (
        <div
          style={{
            position: 'relative',
            left: hideIcon ? '2rem' : '0.75rem',
            bottom: '0.5rem',
          }}
        >
          <TooltipWrapper>
            <TextWrapper>
              <LongFormText content={description} isSmall isInverted />
            </TextWrapper>
            <Image
              src="/icons/tooltip.svg"
              alt="Tooltip"
              width={20}
              height={20}
              style={{
                position: 'relative',
                left: '45%',
                bottom: '0.25rem',
              }}
            />
          </TooltipWrapper>
        </div>
      );
    }
  }

  return (
    <>
      {hideIcon ? (
        <div style={{ display: 'flex', gap: '0.25rem', cursor: 'pointer' }}>
          {!isMobile && renderTooltip()}
          <Caption
            style={{
              fontSize: '0.725rem',
              color: isActive ? '#FFFFFF' : '#2A8356',
              marginTop: isMobile ? '0.5rem' : 0,
              textDecoration: 'underline',
            }}
            onClick={() => setActive(true)}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => (isMobile ? setActive(true) : setActive(false))}
          >
            More Info
          </Caption>
        </div>
      ) : (
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.25rem',
          }}
        >
          <PrimaryText
            style={{
              fontSize:
                isSmall || isMobile ? '0.75rem' : isBold ? '1rem' : '0.875rem',
              color: isBold ? '#3F3F3F' : '#989B9F',
            }}
          >
            {label}
          </PrimaryText>
          <div>
            {!isMobile && !hideIcon && renderTooltip()}

            <div style={{ height: '1.25rem', width: '1.25rem' }}>
              <Image
                src="/icons/info.svg"
                alt="Info"
                width={20}
                height={20}
                style={{ cursor: 'pointer' }}
                onClick={() => setActive(true)}
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() =>
                  isMobile ? setActive(true) : setActive(false)
                }
              />
            </div>
          </div>
        </div>
      )}

      {isMobile && (
        <DefaultDrawer
          showDrawer={active}
          onClose={() => setActive(false)}
          content={
            <>
              <SmallHeading style={{ marginBottom: '0.5rem' }}>
                {label}
              </SmallHeading>
              <LongFormText content={description} />
            </>
          }
        />
      )}
    </>
  );
}

const TooltipWrapper = styled.div`
  position: absolute;
  z-index: 999;
  bottom: calc(100% - 0.5rem);
  transform: translateX(-50%);
`;

const TextWrapper = styled.div`
  width: 18rem;
  border-radius: 0.625rem;
  background: #3f3f3f;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
  padding: 1rem;
`;
