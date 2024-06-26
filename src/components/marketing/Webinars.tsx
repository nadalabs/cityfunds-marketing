'use client';
import LongFormText from '@components/common/LongFormText';
import { PrimaryButton } from '@elements/Buttons';
import {
  ContentWrapper,
  GridWrapper,
  SectionWrapper,
  StackWrapper,
} from '@elements/Containers';
import { Caption, Heading, SmallHeading } from '@elements/Typography';
import { urlForImage } from 'lib/sanity';
import moment from 'moment';
import Image from 'next/image';

interface WebinarsProps {
  webinar: {
    title: string;
    description: string;
    date: Date;
    image: string;
    link: string;
  };
}

export default function Webinars({ webinar }: WebinarsProps) {
  return (
    <SectionWrapper>
      <GridWrapper>
        {webinar && (
          <Image
            width={500}
            height={500}
            alt={webinar?.title}
            src={urlForImage(webinar?.image)}
          />
        )}

        <ContentWrapper>
          <StackWrapper style={{ marginBottom: '2rem' }}>
            <Heading>
              Upcoming <span style={{ color: '#48DC95' }}>Webinar</span>
            </Heading>
            <LongFormText content={webinar?.description} isLarge />
          </StackWrapper>

          <StackWrapper style={{ gap: '1rem' }}>
            <SmallHeading>{webinar?.title}</SmallHeading>
            <Caption>
              {moment(webinar?.date).format('MMMM D, YYYY [at] h:mm A [CST]')}
            </Caption>
            <div>
              <PrimaryButton
                onClick={() => window.open(webinar?.link, '_blank')}
              >
                Register Here
              </PrimaryButton>
            </div>
          </StackWrapper>
        </ContentWrapper>
      </GridWrapper>
    </SectionWrapper>
  );
}
