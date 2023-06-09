import { PrimaryButton } from '@elements/Buttons';
import { LinkText } from '@elements/Typography';
import { EXTERNAL_ROUTES, HEADER_LINKS } from '@utils/constants';
import { urlForImage } from 'lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface HeaderProps {
  partnerImage?: string;
  partnerName?: string;
}

export default function DesktopNavBar({
  partnerImage,
  partnerName,
}: HeaderProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const router = useRouter();

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <SectionWrapper
      style={{
        top: scrollPosition === 0 ? 45 : 0,
        backdropFilter: 'blur(1.5px)',
        background:
          'linear-gradient(180deg, rgba(255, 255, 255, 0.9) 42.74%, rgba(255, 255, 255, 0.7) 65.57%, rgba(255, 255, 255, 0) 100%)',
      }}
    >
      {partnerImage ? (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            width={188}
            height={54}
            alt={'Cityfunds'}
            src={'/icons/cityfunds-dark.svg'}
          />
          <hr
            style={{
              width: '1px',
              height: '54px',
              display: 'inline-block',
              border: '1px solid black',
              margin: '0 24px',
            }}
          />
          <Image
            width={188}
            height={54}
            alt={partnerName}
            src={urlForImage(partnerImage).url()}
          />
        </div>
      ) : (
        <Link href={`/`}>
          <Image
            width={188}
            height={54}
            alt="Nada"
            src="/icons/nada-dark.svg"
          />
        </Link>
      )}

      <div>
        {partnerImage ? (
          <PrimaryButton
            onClick={() => window.location.replace(EXTERNAL_ROUTES.WEB_APP)}
          >
            Get Started
          </PrimaryButton>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {HEADER_LINKS.map(({ name, link }, idx) => (
              <LinkText
                key={idx}
                href={link}
                style={{
                  marginBottom: 0,
                  fontWeight: 600,
                  color: link === router.pathname ? '#48DC95' : 'black',
                }}
              >
                {name.toUpperCase()}
              </LinkText>
            ))}

            <PrimaryButton
              onClick={() => window.location.replace(EXTERNAL_ROUTES.WEB_APP)}
            >
              Get Started
            </PrimaryButton>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}

const SectionWrapper = styled.div`
  transition: ${({ theme }) => theme.transitions.ease};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 100px 70px 100px;
  position: fixed;
  z-index: 999;
  width: 100%;
`;
