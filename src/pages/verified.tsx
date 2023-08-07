import PageHero from '@components/common/PageHero';
import PageLayout from '@components/common/PageLayout';
import { PrimaryText, SmallHeading } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { EXTERNAL_ROUTES, FEATURED_CITIES } from '@utils/constants';
import { getCookie } from '@utils/helpers';
import { REGULATION } from '@utils/models';
import {
  cityfundsTestimonialsQuery,
  cityfundsValuesQuery,
  ourFocusQuery,
  pressLogosQueryQuery,
} from 'lib/queries';
import { getClient } from 'lib/sanity.server';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { styled } from 'styled-components';

export default function VerifiedPage() {
  const retailFunds = FEATURED_CITIES.filter(
    ({ information }) => information.regulation !== REGULATION.REG_D
  );
  const isMobile = useIsMobile();

  useEffect(() => {
    try {
      fetch(process.env.NEXT_PUBLIC_API_URL + '/verified/kyc/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          verifiedUuid: getCookie('sharedCredentialsUuid'),
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
        heroImages={retailFunds.map(({ name, images }) => ({
          name,
          heroImage: images.heroImage,
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

export async function getStaticProps({ params, preview = false }) {
  const testimonials = await getClient(preview).fetch(
    cityfundsTestimonialsQuery
  );
  const values = await getClient(preview).fetch(cityfundsValuesQuery);
  const logos = await getClient(preview).fetch(pressLogosQueryQuery);
  const ourFocusData = await getClient(preview).fetch(ourFocusQuery);
  const ourFocus = ourFocusData?.summary?.content;

  return {
    props: { testimonials, logos, values, ourFocus },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
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
