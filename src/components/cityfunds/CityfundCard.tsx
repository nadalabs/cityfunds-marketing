import NadaText from '@components/cityfunds/NadaText';
import { Caption } from '@elements/Typography';
import { FUND_STATUS, REGULATION } from '@utils/constants';
import { urlForImage } from 'lib/sanity';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

export const CityfundCard = ({
  name,
  images,
  regulation,
  status,
  card_data,
}: any) => {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);
  const sliderRef = useRef<Slider>(null);
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    arrows: false,
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(hovered ? 1 : 0);
    }
  }, [hovered]);

  return (
    <CardWrapper
      onClick={() => router.push(`/cityfunds/${name.toLowerCase()}`)}
    >
      <div>
        <Slider {...settings} ref={sliderRef}>
          {images &&
            images.map((image: any, idx: number) => (
              <div key={idx}>
                <CardWrapper
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  style={{
                    justifyContent:
                      regulation === REGULATION.ACCREDITED
                        ? 'space-between'
                        : 'flex-end',
                    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 39.06%, rgba(0, 0, 0, 0.22) 67.71%, rgba(0, 0, 0, 0.40) 95.83%), url(${urlForImage(
                      image,
                      576,
                      384
                    ).url()}), lightgray 50% / cover no-repeat`,
                  }}
                >
                  <ContentWrapper
                    style={{
                      justifyContent:
                        regulation === REGULATION.ACCREDITED ||
                        status === FUND_STATUS.PRESALE
                          ? 'space-between'
                          : 'flex-end',
                    }}
                  >
                    {regulation === REGULATION.ACCREDITED && (
                      <LockWrapper>
                        <Image
                          src="/icons/lock.svg"
                          alt="Lock"
                          height={16}
                          width={16}
                          style={{ marginRight: '0.5rem' }}
                        />
                        <Caption style={{ color: 'white', fontWeight: 600 }}>
                          Accredited Only
                        </Caption>
                      </LockWrapper>
                    )}
                    {status === FUND_STATUS.PRESALE && (
                      <LockWrapper>
                        <Image
                          src="/icons/lock.svg"
                          alt="Lock"
                          height={16}
                          width={16}
                          style={{ marginRight: '0.5rem' }}
                        />
                        <Caption style={{ color: 'white', fontWeight: 600 }}>
                          Coming Soon
                        </Caption>
                      </LockWrapper>
                    )}

                    <TickerWrapper>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <NadaText name={name} />

                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                          }}
                        >
                          {card_data.map(
                            ({ label, value }: any, jdx: number) => (
                              <div key={jdx}>
                                <StatLabel>{label}</StatLabel>
                                <StatValue>{value}</StatValue>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </TickerWrapper>
                  </ContentWrapper>
                </CardWrapper>
              </div>
            ))}
        </Slider>
      </div>
    </CardWrapper>
  );
};

export const CardWrapper = styled.div`
  width: 24rem;
  height: 32rem;
  border-radius: 3.125rem;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    padding: 0;
  }
`;

export const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 1rem 1.5rem;
  }
`;

export const LockWrapper = styled.div`
  display: flex;
  border-radius: 0.4265rem;
  background: rgba(22, 22, 22, 0.33);
  backdrop-filter: blur(1.7px);
  padding: 0.17063rem 0.34125rem;
  text-transform: uppercase;
  width: fit-content;
`;

export const TickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.3125rem;
  border-radius: 1.5625rem;
  background: rgba(0, 0, 0, 0.33);
  backdrop-filter: blur(2.5px);
`;

export const StatLabel = styled.p`
  color: #fff;
  font-family: Poppins;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.04638rem;
  text-transform: uppercase;
`;

export const StatValue = styled.p`
  color: #fff;
  font-family: Poppins;
  font-size: 0.92775rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.04638rem;
  border-radius: 0.46388rem;
  background: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(1.8555556535720825px);
  display: inline;
  padding: 0.18556rem 0.37113rem;
  gap: 0.18556rem;
  margin-bottom: 1.25rem;
`;
