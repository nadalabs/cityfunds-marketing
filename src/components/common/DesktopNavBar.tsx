import { NavbarLink, PrimaryButton } from '@elements/Buttons';
import { HEADER_LINKS } from '@utils/constants';
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
  const isScroll = scrollPosition > 0;

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
        zIndex: 99,
        top: scrollPosition === 0 && isBanner ? '2.4rem' : 0,
        backgroundColor: 'white',
        boxShadow: isScroll ? '0px 4px 25px 0px rgba(0, 0, 0, 0.10)' : 'none',
      }}
    >
      <NavbarContent>
        <Link href="/">
          <Image
            src="/icons/cityfunds-dark.svg"
            alt="Nada"
            width={184}
            height={52}
          />
        </Link>

        <div
          style={{ display: 'flex', justifyContent: 'flex-end', gap: '1.5rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            {HEADER_LINKS.map(({ name, link }, idx) => (
              <NavbarLink
                key={idx}
                href={link}
                style={{
                  color: link === router.pathname ? '#48DC95' : '#3F3F3F',
                }}
              >
                {name}
              </NavbarLink>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <PrimaryButton
              onClick={() =>
                window.open(
                  `${process.env.NEXT_PUBLIC_WEB_APP_URL}/login`,
                  '_blank'
                )
              }
              isInverted
            >
              Log In
            </PrimaryButton>
            <PrimaryButton
              onClick={() =>
                window.open(
                  `${process.env.NEXT_PUBLIC_WEB_APP_URL}/signup`,
                  '_blank'
                )
              }
            >
              Sign Up
            </PrimaryButton>
          </div>
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
