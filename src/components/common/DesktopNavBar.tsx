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
  bannerText?: string;
  hideLinks?: boolean;
}

export default function DesktopNavBar({
  pageImage,
  partnerImage,
  partnerName,
  bannerText,
  hideLinks,
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
    <NavbarWrapper
      style={{ top: scrollPosition === 0 && bannerText ? '2.85rem' : 0 }}
    >
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
            onClick={() =>           window.open(
              `${process.env.NEXT_PUBLIC_WEB_APP_URL}/signup`,
              '_blank'
            )}
          >
            Get Started
          </PrimaryButton>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
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

            <PrimaryButton
            onClick={() =>           window.open(
              `${process.env.NEXT_PUBLIC_WEB_APP_URL}/signup`,
              '_blank'
            )}            >
              Get Started
            </PrimaryButton>
          </div>
        )}
      </div>
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
    rgba(0, 0, 0, 0.27) 42.74%,
    rgba(0, 0, 0, 0.21) 65.57%,
    rgba(0, 0, 0, 0) 100%
  );
  backdrop-filter: blur(1.5px);
  padding: 20px 100px 40px 100px;
  z-index: 999;
  width: 100%;
`;

const Divider = styled.div`
  width: 1px;
  height: 54px;
  display: inline-block;
  border: 1px solid black;
  margin: 0 24px;
`;
