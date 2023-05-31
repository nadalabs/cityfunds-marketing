import { PrimaryButton } from '@elements/Buttons';
import { LinkText } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { EXTERNAL_ROUTES } from '@utils/constants';
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

export default function MobileNavBar({
  partnerImage,
  partnerName,
  isDarkMode,
}: HeaderProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
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
        backgroundColor: showMenu
          ? '#303030'
          : scrollPosition > 50
          ? 'rgba(255, 255, 255, 0.8)'
          : 'transparent',
        backdropFilter: scrollPosition > 50 ? 'blur(10px)' : 'none',
      }}
    >
      <FlexWrapper>
        <Link href={`/`}>
          <Image
            width={150}
            height={40}
            alt={'Nada'}
            src={
              isDarkMode || scrollPosition > 50
                ? '/icons/nada-dark.svg'
                : '/icons/nada-light.svg'
            }
          />
        </Link>

        <Image
          width={25}
          height={30}
          alt={'Cityfunds'}
          src={'/icons/mobile-menu.svg'}
          onClick={() => setShowMenu(true)}
        />
      </FlexWrapper>

      {showMenu && (
        <MenuWrapper>
          {NAV_LINKS.map(({ name, link }, idx) => (
            <LinkText
              key={idx}
              href={link}
              isDarkMode={isDarkMode}
              style={{ color: 'white' }}
            >
              {name.toUpperCase()}
            </LinkText>
          ))}

          <PrimaryButton
            onClick={() => window.location.replace(EXTERNAL_ROUTES.WEB_APP)}
          >
            Get Started
          </PrimaryButton>
        </MenuWrapper>
      )}
    </SectionWrapper>
  );
}

const SectionWrapper = styled.div`
  transition: ${({ theme }) => theme.transitions.ease};
  position: fixed;
  z-index: 999;
  width: 100%;
  padding: 30px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 158px;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
