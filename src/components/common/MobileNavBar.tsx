import { PrimaryButton } from '@elements/Buttons';
import { FlexWrapper } from '@elements/Containers';
import { LinkText } from '@elements/Typography';
import { EXTERNAL_ROUTES, HEADER_LINKS } from '@utils/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Drawer from 'react-modern-drawer';
import styled from 'styled-components';

interface MobileNavBarProps {
  isBanner?: boolean;
}

export default function MobileNavBar({ isBanner }: MobileNavBarProps) {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const isHomeshares = router.pathname.includes('homeshares');

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
    <>
      <NavbarWrapper
        style={{ top: scrollPosition === 0 && isBanner ? '5.2rem' : 0 }}
      >
        <FlexWrapper>
          <Link href="/">
            <Image
              src="/icons/nada-light.svg"
              alt="Nada"
              height={40}
              width={160}
            />
          </Link>
          <Image
            src="/icons/menu-light.svg"
            alt="Menu"
            onClick={() => setShowMenu(true)}
            height={40}
            width={40}
            style={{ zIndex: 9999999 }}
          />
        </FlexWrapper>
      </NavbarWrapper>

      <Drawer
        open={showMenu}
        onClose={() => setShowMenu(false)}
        direction="top"
        style={{
          height: 'inherit',
          backgroundColor: '#303030',
          borderBottomRightRadius: '1.5rem',
          borderBottomLeftRadius: '1.5rem',
          padding: '1.5rem',
        }}
      >
        <FlexWrapper style={{ paddingBottom: '2rem' }}>
          <Link href="/">
            <Image
              src="/icons/nada-light.svg"
              alt="Nada"
              height={40}
              width={160}
            />
          </Link>
          <Image
            src="/icons/cancel-light.svg"
            alt="Menu"
            onClick={() => setShowMenu(!showMenu)}
            height={20}
            width={20}
          />
        </FlexWrapper>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {HEADER_LINKS.map(({ name, link }, idx) => (
            <LinkText
              key={idx}
              href={link}
              onClick={() => setShowMenu(false)}
              style={{
                fontSize: '1rem',
                color: link === location.pathname ? '#48DC95' : 'white',
                marginBottom: 0,
              }}
            >
              {name.toUpperCase()}
            </LinkText>
          ))}
          {isHomeshares ? (
            <a href={EXTERNAL_ROUTES.TYPEFORM} target="_blank">
              <PrimaryButton
                onClick={() => setShowMenu(false)}
                style={{ textTransform: 'uppercase' }}
                isInverted
              >
                Apply Now
              </PrimaryButton>
            </a>
          ) : (
            <>
              <a
                href={`${process.env.NEXT_PUBLIC_WEB_APP_URL}/login`}
                target="_blank"
              >
                <PrimaryButton
                  onClick={() => setShowMenu(false)}
                  style={{ textTransform: 'uppercase' }}
                  isInverted
                >
                  Log In
                </PrimaryButton>
              </a>
              <a
                href={`${process.env.NEXT_PUBLIC_WEB_APP_URL}/signup`}
                target="_blank"
              >
                <PrimaryButton
                  onClick={() => setShowMenu(false)}
                  style={{ textTransform: 'uppercase' }}
                >
                  Sign Up
                </PrimaryButton>
              </a>
            </>
          )}
        </div>
      </Drawer>
    </>
  );
}

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
    rgba(0, 0, 0, 0.27) 42.74%,
    rgba(0, 0, 0, 0.21) 65.57%,
    rgba(0, 0, 0, 0) 100%
  );
  backdrop-filter: blur(1.5px);
  position: fixed;
  width: 100vw;
  z-index: 99;
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  padding: 2rem 1rem;
`;
