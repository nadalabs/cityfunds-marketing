import LongFormText from '@components/common/LongFormText';
import { PrimaryButton } from '@elements/Buttons';
import { FlexWrapper, StackWrapper } from '@elements/Containers';
import { Caption, Heading, SmallHeading } from '@elements/Typography';
import useIsMobile from '@hooks/useIsMobile';
import { urlForImage } from 'lib/sanity';
import moment from 'moment';
import Image from 'next/image';
import styled from 'styled-components';

interface WebinanarsProps {
  webinar: {
    title: string;
    description: string;
    date: Date;
    image: string;
    link: string;
  };
}

export default function Webinanars({ webinar }: WebinanarsProps) {
  const isMobile = useIsMobile();

  return (
    <SectionWrapper id="promo">
      <FlexWrapper
        style={{
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          gap: isMobile ? '1rem' : '2.5rem',
          padding: isMobile ? '0 1rem' : '2rem 6.25rem',
        }}
      >
        <Image
          width={isMobile ? 360 : 672}
          height={isMobile ? 240 : 352}
          alt={webinar?.title}
          src={urlForImage(webinar?.image)}
        />

        <ContentWrapper>
          <StackWrapper>
            <Heading>
              💻 Upcoming <span style={{ color: '#48DC95' }}>Webinar</span>
            </Heading>
            <LongFormText content={webinar?.description} />
          </StackWrapper>

          <StackWrapper>
            <SmallHeading>{webinar?.title}</SmallHeading>
            <Caption>
              {moment(webinar?.date).format('MMMM D, YYYY [at] h:mm A [CST]')}
            </Caption>
            <div>
              <PrimaryButton
                onClick={() => window.open(webinar?.link, '_blank')}
              >
                Register here
              </PrimaryButton>
            </div>
          </StackWrapper>
        </ContentWrapper>
      </FlexWrapper>
    </SectionWrapper>
  );
}

export const SectionWrapper = styled.div`
  padding-bottom: 12rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 8rem 0 0 0;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 600px;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: 1.5rem;
  }
`;
