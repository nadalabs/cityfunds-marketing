import { PrimaryButton } from '@elements/Buttons';
import { LinkText } from '@elements/Typography';
import { EXTERNAL_ROUTES } from '@utils/constants';
import { isMobileDevice } from '@utils/helpers';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  partnerImage?: string;
  isDarkMode?: boolean;
}

export default function Header({ partnerImage, isDarkMode }: HeaderProps) {
  const isMobile = isMobileDevice();

  const NAV_LINKS = [
    { name: 'Homeshares', link: '/homeshares' },
    { name: 'About', link: '/about' },
    { name: 'Learn', link: '/learn' },
  ];

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px 48px',
        background: 'none',
        position: 'fixed',
        zIndex: 99,
        width: '100%',
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
          <Image width={125} height={30} alt={'Altsco'} src={partnerImage} />
        </div>
      ) : (
        <Link href={`/`}>
          <Image
            width={222}
            height={64}
            alt={'Nada'}
            src={isDarkMode ? '/icons/nada-light.svg' : '/icons/nada-dark.svg'}
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
                  <LinkText key={idx} href={link} isDarkMode={isDarkMode}>
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
    </div>
  );
}
