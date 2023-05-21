import Image from 'next/image';
import { Heading1, Heading2 } from '../elements/Typography';
import { PrimaryButton } from '../elements/Buttons';

export default function LocationSection({}) {
  const STATS = [
    { label: 'Total Investors', value: 7000 },
    { label: 'Total Invested', value: 1.8 },
    { label: 'Properties Funded', value: 60 },
  ];

  return (
    <div style={{ padding: '100px 0' }}>
      <div style={{ display: 'flex' }}>
        <Image
          width={596}
          height={596}
          alt={`Cover Image`}
          src={'/location.png'}
        />
        <div style={{ marginLeft: '80px' }}>
          <Heading1>Location, Location, Location</Heading1>
          <Heading2>
            Everyone knows real estate investing is about location - yet
            traditional real estate investing isn’t set up this way. Now
            everyone can own real estate in their favorite city in less than 5
            minutes
          </Heading2>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {STATS.map(({ label, value }) => (
          <div key={label}>
            <Heading1>{value}</Heading1>
            <Heading2>{label}</Heading2>
          </div>
        ))}
      </div>
    </div>
  );
}
