import { NavbarLink, PrimaryButton } from '@elements/Buttons';
import { EXTERNAL_ROUTES, HEADER_LINKS } from '@utils/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface DesktopNavBarProps {
  isBanner?: boolean;
}

export default function DesktopNavBar({ isBanner }: DesktopNavBarProps) {
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState(0);
  const isAuth = router.pathname === '/login' || router.pathname === '/signup';
  const isScroll = scrollPosition > 0;
  const isHomeshares = false;

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
    <NavbarWrapper
      style={{
        zIndex: isAuth ? 9 : 99,
        top: scrollPosition === 0 && isBanner ? '2.4rem' : 0,
        backgroundColor: isAuth ? 'transparent' : 'white',
        boxShadow:
          !isAuth && isScroll ? '0px 4px 25px 0px rgba(0, 0, 0, 0.10)' : 'none',
      }}
    >
      <NavbarContent>
        <Link href="/">
          <Image
            src={isAuth ? '/icons/nada-light.svg' : '/icons/nada-dark.svg'}
            alt="Nada"
            width={184}
            height={52}
          />
        </Link>

        <div>
        {HEADER_LINKS.map(({ name, link }, idx) => (
          <Link href={link} key={idx}>
            <NavbarLink
              style={{
                color: link === router.pathname ? '#48DC95' : '#3F3F3F',
              }}
            >
              {name}
            </NavbarLink>
          </Link>
        ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {!isHomeshares && (
            <PrimaryButton
              onClick={() =>
                window.open(
                  isHomeshares
                    ? `${EXTERNAL_ROUTES.TYPEFORM}`
                    : `${process.env.NEXT_PUBLIC_WEB_APP_URL}/login`,
                  '_blank'
                )
              }
              isInverted
            >
              Log In
            </PrimaryButton>
          )}
          <PrimaryButton
            onClick={() =>
              window.open(
                isHomeshares
                  ? `${EXTERNAL_ROUTES.TYPEFORM}`
                  : `${process.env.NEXT_PUBLIC_WEB_APP_URL}/signup`,
                '_blank'
              )
            }
          >
            {isHomeshares ? 'Apply Now' : 'Sign Up'}
          </PrimaryButton>
        </div>
      </NavbarContent>
    </NavbarWrapper>
  );
}
const NavbarWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  padding: 1.5rem 6.25rem;
  width: 100vw;
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 100rem;
`;
