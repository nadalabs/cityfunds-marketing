import { PrimaryButton } from '@elements/Buttons';
import { LinkText } from '@elements/Typography';
import { EXTERNAL_ROUTES, HEADER_LINKS } from '@utils/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function MobileNavBar({ bannerText }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
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
        background: showMenu
          ? '#303030'
          : 'linear-gradient(rgba(0, 0, 0, 0.27) 42.74%,rgba(0, 0, 0, 0.21) 65.57%,rgba(0, 0, 0, 0) 100%)',
        backdropFilter: 'blur(1.5px)',
        top: scrollPosition === 0 && bannerText ? '4.75rem' : 0,
      }}
    >
      <FlexWrapper>
        <Link href={`/`}>
          <Image
            width={150}
            height={40}
            alt={'Nada'}
            src={'/icons/nada-light.svg'}
          />
        </Link>

        <Image
          width={40}
          height={40}
          alt={'Cityfunds'}
          src={'/icons/mobile-light.svg'}
          onClick={() => setShowMenu(!showMenu)}
        />
      </FlexWrapper>

      {showMenu && (
        <MenuWrapper>
          {HEADER_LINKS.map(({ name, link }, idx) => (
            <LinkText
              key={idx}
              href={link}
              style={{ color: link === router.pathname ? '#48DC95' : 'white' }}
            >
              {name.toUpperCase()}
            </LinkText>
          ))}

          <PrimaryButton
            onClick={() =>           window.open(
              `${process.env.NEXT_PUBLIC_WEB_APP_URL}/signup`,
              '_blank'
            )}          >
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
  width: 100vw;
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
