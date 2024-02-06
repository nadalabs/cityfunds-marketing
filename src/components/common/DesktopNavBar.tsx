import { NavbarLink, PrimaryButton } from '@elements/Buttons';
import { FlexWrapper, StackWrapper } from '@elements/Containers';
import { HEADER_LINKS } from '@utils/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface DesktopNavBarProps {
  isBanner?: boolean;
}

export default function DesktopNavBar({ isBanner }: DesktopNavBarProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [dropDown, setDropdown] = useState(false);
  const isScroll = scrollPosition > 0;
  const pathname = usePathname();

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
      <Link href="/">
        <Image
          src="/icons/cityfunds-dark.svg"
          alt="Cityfunds"
          width={200}
          height={60}
        />
      </Link>

      <div
        style={{ display: 'flex', justifyContent: 'flex-end', gap: '1.5rem' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {HEADER_LINKS.map(({ name, link, links }, idx) => (
            <div key={idx}>
              {links ? (
                <StackWrapper onMouseLeave={() => setDropdown(false)}>
                  <FlexWrapper
                    onMouseEnter={() => setDropdown(true)}
                    style={{ cursor: 'pointer', gap: '0.5rem' }}
                  >
                    <PrimaryLink
                      href={link}
                      style={{
                        color: link === pathname ? '#48DC95' : 'black',
                      }}
                    >
                      {name}
                    </PrimaryLink>
                    <Image
                      width={16}
                      height={16}
                      alt={'Menu'}
                      src={'/icons/arrow-down.svg'}
                    />
                  </FlexWrapper>

                  {links && dropDown && (
                    <DropdownMenu style={{ marginTop: '1rem' }}>
                      {links.map(({ name, link, isNewTab }, idx) => (
                        <MenuLink
                          key={idx}
                          href={link}
                          target={isNewTab ? '_blank' : '_self'}
                          onMouseEnter={() => setDropdown(true)}
                        >
                          {name}
                        </MenuLink>
                      ))}
                    </DropdownMenu>
                  )}
                </StackWrapper>
              ) : (
                <PrimaryLink
                  href={link}
                  style={{
                    color: link === pathname ? '#48DC95' : '#1A1A1A',
                  }}
                >
                  {name}
                </PrimaryLink>
              )}
            </div>
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
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  padding: 1.5rem 6.25rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: 1.5rem 16rem;
  }
`;

const DropdownMenu = styled.div`
  transition: ${({ theme }) => theme.transitions.ease};
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 2.5rem;
  background-color: #ffffff;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 2rem;
`;

const PrimaryLink = styled(NavbarLink)`
  &:hover {
    color: #48dc95 !important;
  }
`;

const MenuLink = styled(NavbarLink)`
  color: #1a1a1a;

  &:hover {
    color: #48dc95 !important;
  }
`;
