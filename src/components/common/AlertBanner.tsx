import { BoldText } from '@elements/Typography';
import styled from 'styled-components';
import { scrollToDiv } from '@utils/helpers';
import { usePathname, useRouter } from 'next/navigation';
import { getCityfundsAppContent } from 'lib/sanity';

export default async function AlertBanner() {
  const cityfundsApp = await getCityfundsAppContent();
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === '/';

  if (!cityfundsApp?.investor_promo?.show_promo) {
    return null;
  }

  return (
    <BannerWrapper>
      <BoldText
        style={{
          display: 'inline',
          color: 'white',
          margin: '0 0.5rem 0 0',
          fontSize: '18px',
        }}
      >
        {cityfundsApp?.investor_promo?.banner}
      </BoldText>
      <BoldText
        onClick={() =>
          isHome
            ? scrollToDiv('investor-promo')
            : router.push('/#investor-promo')
        }
        style={{
          display: 'inline',
          color: '#48DC95',
          margin: '0 1rem 0 0',
          fontSize: '18px',
          cursor: 'pointer',
        }}
      >
        Learn More
      </BoldText>
    </BannerWrapper>
  );
}

const BannerWrapper = styled.div`
  width: 100vw;
  background-color: #303030;
  text-align: center;
  padding: 0.5rem 0;
  position: absolute;
  top: 0;
  z-index: 999999999;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;
