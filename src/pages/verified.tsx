import PageHero from '@components/common/PageHero';
import PageLayout from '@components/common/PageLayout';
import { PrimaryText, SmallHeading } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { EXTERNAL_ROUTES, FUND_STATUS, REGULATION } from '@utils/constants';
import { getAllFundsContent } from 'lib/sanity';
import { getAllFundsData } from 'lib/supabase';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { styled } from 'styled-components';

export default function VerifiedPage({ cityfunds }) {
  const isMobile = useIsMobile();

  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      fetch(process.env.NEXT_PUBLIC_API_URL + '/verified/kyc/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          verifiedUuid: urlParams.get('sharedCredentialsUuid'),
        }),
      });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <PageLayout
      pageImage={
        <Image
          width={188}
          height={54}
          alt={'Verified'}
          src={'/icons/verified.svg'}
        />
      }
      hideLinks
    >
      <PageHero
        heroImages={cityfunds
          .filter(
            ({ fund_data }) =>
              fund_data?.regulation === REGULATION.RETAIL &&
              fund_data?.fund_status !== FUND_STATUS.NEW_OFFERING
          )
          .map(({ fund_content }) => ({
            name: fund_content?.fund_name,
            heroImage: fund_content?.image_gallery[0],
          }))}
      />

      <ModalWrapper>
        <div>
          <SmallHeading>Your account was created!</SmallHeading>
          <PrimaryText>
            {isMobile ? 'Click the link' : 'Scan the QR code'} or check out the
            text we sent you to download the app. Log in to get started
            investing today!
          </PrimaryText>
        </div>
        {isMobile ? (
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
          >
            <Link href={EXTERNAL_ROUTES.APPLE_STORE} target="blank">
              <Image
                width={135}
                height={40}
                alt={'Nada'}
                src={'/images/apple-store.png'}
              />
            </Link>
            <Link href={EXTERNAL_ROUTES.GOOGLE_STORE} target="blank">
              <Image
                width={135}
                height={40}
                alt={'Nada'}
                src={'/images/google-store.png'}
              />
            </Link>
          </div>
        ) : (
          <Image
            width={200}
            height={200}
            alt={'Nada'}
            src={'/images/qr-code.png'}
          />
        )}
      </ModalWrapper>
    </PageLayout>
  );
}

export async function getServerSideProps() {
  const fundsData = await getAllFundsData();
  const fundsContent = await getAllFundsContent();
  const cityfunds = fundsData.map((data) => {
    const content = fundsContent.find(
      (content) => content.fund_name === data.fund_name
    );
    return { fund_data: data, fund_content: content };
  });

  return {
    props: { cityfunds },
  };
}

export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  background: white;
  border: 1px solid #e7e7e7;
  box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
  width: 36rem;
  padding: 4rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    top: 25%;
    left: 0;
    transform: none;
    padding: 1rem 2rem;
    margin: 1rem;
    width: inherit;
    border: none;
    box-shadow: none;
  }
`;