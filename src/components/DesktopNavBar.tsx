import { PrimaryButton } from '@elements/Buttons';
import { LinkText } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { EXTERNAL_ROUTES } from '@utils/constants';
import { urlForImage } from 'lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface HeaderProps {
  partnerImage?: string;
  partnerName?: string;
  isDarkMode?: boolean;
}

export default function DesktopNavBar({
  partnerImage,
  partnerName,
  isDarkMode,
}: HeaderProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const router = useRouter();
  const isMobile = useIsMobile();

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

  const NAV_LINKS = [
    { name: 'Cityfunds', link: '/' },
    { name: 'Homeshares', link: '/homeshares' },
    { name: 'About', link: '/about' },
    { name: 'Learn', link: '/learn' },
  ];

  return (
    <SectionWrapper
      style={{
        backgroundColor:
          scrollPosition > 50 ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
        backdropFilter: scrollPosition > 50 ? 'blur(10px)' : 'none',
      }}
    >
      {partnerImage ? (
        <div style={{ display: 'flex' }}>
          <Image
            width={125}
            height={30}
            alt={'Cityfunds'}
            src={'/images/cityfunds.png'}
          />
          <hr
            style={{
              width: '1px',
              height: '30px',
              display: 'inline-block',
              margin: '0 24px',
            }}
          />
          <Image
            width={125}
            height={30}
            alt={partnerName}
            src={urlForImage(partnerImage).height(30).width(125).url()}
          />
        </div>
      ) : (
        <Link href={`/`}>
          <Image
            width={222}
            height={64}
            alt={'Nada'}
            src={
              isDarkMode || scrollPosition > 50
                ? '/icons/nada-dark.svg'
                : '/icons/nada-light.svg'
            }
          />
        </Link>
      )}

      <div>
        {partnerImage
          ? !isMobile && (
              <PrimaryButton
                onClick={() => window.location.replace(EXTERNAL_ROUTES.WEB_APP)}
              >
                Get Started
              </PrimaryButton>
            )
          : !isMobile && (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {NAV_LINKS.map(({ name, link }, idx) => (
                  <LinkText
                    key={idx}
                    href={link}
                    isDarkMode={isDarkMode}
                    style={{
                      marginBottom: 0,
                      color:
                        isDarkMode || scrollPosition > 50 ? 'black' : 'white',
                    }}
                  >
                    {name.toUpperCase()}
                  </LinkText>
                ))}

                <PrimaryButton
                  onClick={() =>
                    window.location.replace(EXTERNAL_ROUTES.WEB_APP)
                  }
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
  padding: 16px 48px;
  position: fixed;
  z-index: 999;
  width: 100%;
`;
