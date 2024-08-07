'use client';
import CityfundTicker from '@components/cityfunds/CityfundTicker';
import NadaText from '@components/cityfunds/NadaText';
import {
  FlexWrapper,
  FundWrapper,
  ImageWrapper,
  InnerWrapper,
  TickerWrapper,
} from '@elements/Containers';
import useIsMobile from '@hooks/useIsMobile';
import { IFundContent, IFundData } from '@utils/models';
import { urlForImage } from 'lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import AssetStatus from '@components/cityfunds/AssetStatus';
import { PrimaryText } from '@elements/Typography';
import styled from 'styled-components';

interface CityfundCardProps {
  fund_data: IFundData;
  fund_content: IFundContent;
  image: string;
  width?: number;
  isSlider?: boolean;
  isStatic?: boolean;
}

export default function CityfundCard({
  fund_data,
  fund_content,
  image,
  width,
  isSlider,
  isStatic,
}: CityfundCardProps) {
  const isMobile = useIsMobile();
  const isPromo = fund_content?.investor_promo?.show_promo;

  function renderCard() {
    return (
      <FundWrapper
        style={{
          cursor: isStatic ? 'default' : 'pointer',
          margin: isSlider ? (isMobile ? '0 0.5rem' : '0.5rem 0') : '0',
        }}
      >
        <ImageWrapper>
          <Image
            alt={fund_data?.fund_name}
            src={urlForImage(image, isMobile ? 200 : 400, width)}
            fill
          />
        </ImageWrapper>
        <InnerWrapper style={{ paddingTop: isPromo ? 0 : '1.5rem' }}>
          {isPromo ? (
            <FlexWrapper style={{ justifyContent: 'center' }}>
              <PromoWrapper>
                <Image
                  src="/icons/flash-dark.svg"
                  alt="Limited Time Match"
                  height={24}
                  width={24}
                />
                <PrimaryText
                  style={{
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                    fontWeight: 600,
                  }}
                >
                  Limited Time Match
                </PrimaryText>
              </PromoWrapper>
            </FlexWrapper>
          ) : (
            <AssetStatus fund_data={fund_data} />
          )}
          <TickerWrapper>
            <NadaText
              name={fund_data?.fund_name}
              size={fund_data?.fund_name.length > 10 ? 'extraSmall' : 'small'}
            />
            <CityfundTicker fund_data={fund_data} isSmall />
          </TickerWrapper>
        </InnerWrapper>
      </FundWrapper>
    );
  }

  if (isStatic) {
    return renderCard();
  } else {
    return (
      <Link
        href={`${process.env.NEXT_PUBLIC_WEB_APP_URL}/${fund_data?.fund_name
          .toLowerCase()
          .replace(/ /g, '-')}`}
        target="_blank"
      >
        {renderCard()}
      </Link>
    );
  }
}

export const PromoWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  width: fit-content;
  border-radius: 0rem 0rem 0.625rem 0.625rem;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.05) 0%,
      rgba(0, 0, 0, 0.05) 100%
    ),
    #25e572;
  backdrop-filter: blur(1.7px);
  padding: 0.25rem 1rem;
`;
