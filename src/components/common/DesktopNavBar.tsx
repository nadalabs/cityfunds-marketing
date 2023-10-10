import { NavbarLink, PrimaryButton } from '@elements/Buttons';
import { EXTERNAL_ROUTES, HEADER_LINKS } from '@utils/constants';
import { urlForImage } from 'lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';

interface HeaderProps {
  pageImage?: ReactNode;
  partnerImage?: string;
  partnerName?: string;
  isBanner?: boolean;
  hideLinks?: boolean;
}

export default function DesktopNavBar({
  pageImage,
  partnerImage,
  partnerName,
  isBanner,
  hideLinks,
}: HeaderProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const router = useRouter();
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
    <NavbarWrapper
      style={{ top: scrollPosition === 0 && isBanner ? '2.4rem' : 0 }}
    >
      <NavbarContent>
        {partnerImage ? (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              width={184}
              height={52}
              alt={'Cityfunds'}
              src={'/icons/cityfunds-dark.svg'}
            />
            <Divider />
            <Image
              width={240}
              height={54}
              alt={partnerName}
              src={urlForImage(partnerImage, 54, 240).url()}
            />
          </div>
        ) : (
          <div>
            <Link href={`/`}>
              <Image
                width={184}
                height={52}
                alt="Nada"
                src="/icons/nada-light.svg"
              />
            </Link>
            {pageImage && (
              <>
                <Divider />
                {pageImage}
              </>
            )}
          </div>
        )}

        <div>
          {hideLinks ? (
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
          ) : (
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}
            >
              {HEADER_LINKS.map(({ name, link }, idx) => (
                <NavbarLink
                  key={idx}
                  href={link}
                  style={{
                    color: link === router.pathname ? '#48DC95' : 'white',
                  }}
                >
                  {name.toUpperCase()}
                </NavbarLink>
              ))}

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
                  Login
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
          )}
        </div>
      </NavbarContent>
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  background: linear-gradient(
    rgba(0, 0, 0, 0.27) 42.74%,
    rgba(0, 0, 0, 0.21) 65.57%,
    rgba(0, 0, 0, 0) 100%
  );
  backdrop-filter: blur(1.5px);
  padding: 20px 100px 40px 100px;
  z-index: 999;
  width: 100vw;
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 100rem;
`;

const Divider = styled.div`
  width: 1px;
  height: 54px;
  display: inline-block;
  border: 1px solid black;
  margin: 0 24px;
`;
