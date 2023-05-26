import { Heading, Overline, Text } from '@elements/Typography';
import { isMobileDevice } from '@utils/helpers';
import EmailCapture from 'src/components/EmailCapture';
import PhoneScreen from 'src/components/PhoneScreen';
import styled from 'styled-components';

interface PublisherCTAProps {
  name: string;
}

export default function PublisherCTA({ name }: PublisherCTAProps) {
  const isMobile = isMobileDevice();

  return (
    <SectionWrapper>
      <div style={{ maxWidth: '542px', marginRight: '84px' }}>
        <Overline>Exclusive Perk for {name} Readers </Overline>
        <Heading>Invest $1,000</Heading>
        <Heading style={{ color: '#48DC95' }}>Get $100</Heading>
        <Text style={{ marginBottom: '8px' }}>
          Homeowner or not, call yourself a real estate investor today. As an
          added bonus get a free $100* when you invest $1000 in any city.
        </Text>
        <Text style={{ color: '#989898' }}>*valid until 5/31/23</Text>
        <EmailCapture />
      </div>

      {!isMobile && <PhoneScreen imageUrl="/images/screen-1.png" />}
    </SectionWrapper>
  );
}

export const SectionWrapper = styled.div`
  padding: 76px 156px 147px 156px;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 24px;
  }
`;
