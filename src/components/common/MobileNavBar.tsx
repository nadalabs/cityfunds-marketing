'use client';
import { NavbarLink, PrimaryButton } from '@elements/Buttons';
import { FlexWrapper, StackWrapper } from '@elements/Containers';
import useIsMobile from '@hooks/useIsMobile';
import { HEADER_LINKS } from '@utils/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Drawer from 'react-modern-drawer';
import styled from 'styled-components';

interface MobileNavBarProps {
  isBanner?: boolean;
}

export default function MobileNavBar({ isBanner }: MobileNavBarProps) {
  const [dropDown, setDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const isScroll = scrollPosition > 0;
  const pathname = usePathname();
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

  if (!isMobile) {
    return null;
  }

  return (
    <>
      <NavbarWrapper
        style={{
          top: scrollPosition === 0 && isBanner ? '4rem' : 0,
          boxShadow: isScroll ? '0px 4px 25px 0px rgba(0, 0, 0, 0.10)' : 'none',
        }}
      >
        <FlexWrapper>
          <Link href="/">
            <Image
              src="/icons/cityfunds-dark.svg"
              alt="Cityfunds"
              width={200}
              height={60}
            />
          </Link>
          <Image
            src="/icons/menu-dark.svg"
            alt="Menu"
            onClick={() => setShowMenu(true)}
            height={40}
            width={40}
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
              src="/icons/cityfunds-light.svg"
              alt="Cityfunds"
              width={200}
              height={60}
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
          {HEADER_LINKS.map(({ name, link, links }, idx) => (
            <div key={idx}>
              {links ? (
                <StackWrapper onClick={() => setDropdown(!dropDown)}>
                  <FlexWrapper style={{ cursor: 'pointer', gap: '0.5rem' }}>
                    <NavbarLink
                      key={idx}
                      href={link}
                      style={{
                        color: link === pathname ? '#48DC95' : 'white',
                      }}
                    >
                      {name.toUpperCase()}
                    </NavbarLink>
                    <Image
                      src={'/icons/arrow-light.svg'}
                      alt={'Menu'}
                      style={{
                        transform: dropDown ? 'rotate(-90deg)' : 'rotate(0deg)',
                      }}
                      width={16}
                      height={16}
                    />
                  </FlexWrapper>

                  {links && dropDown && (
                    <StackWrapper style={{ paddingLeft: '1rem' }}>
                      {links.map(({ name, link }, idx) => (
                        <NavbarLink
                          key={idx}
                          href={link}
                          onMouseEnter={() => setDropdown(true)}
                        >
                          {name.toUpperCase()}
                        </NavbarLink>
                      ))}
                    </StackWrapper>
                  )}
                </StackWrapper>
              ) : (
                <NavbarLink
                  key={idx}
                  href={link}
                  style={{
                    color: link === pathname ? '#48DC95' : 'white',
                  }}
                >
                  {name.toUpperCase()}
                </NavbarLink>
              )}
            </div>
          ))}

          <>
            <a
              href={`${process.env.NEXT_PUBLIC_WEB_APP_URL}/login`}
              target="_blank"
            >
              <PrimaryButton
                onClick={() => setShowMenu(false)}
                style={{ textTransform: 'uppercase' }}
                $isInverted
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
        </div>
      </Drawer>
    </>
  );
}

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  backdrop-filter: blur(1.5px);
  position: fixed;
  width: 100vw;
  z-index: 99;
  padding: 2rem 1rem;
`;
