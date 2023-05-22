import { PrimaryButton } from '@elements/Buttons';
import {
  GreenSquare,
  Heading,
  Overline,
  PrimaryText,
} from '@elements/Typography';
import { EXTERNAL_ROUTES } from '@utils/constants';
import Image from 'next/image';

export default function LocationSection({}) {
  const STATS = [
    { label: 'Total Investors', value: 7000 },
    { label: 'Total Invested', value: 1.8 },
    { label: 'Properties Funded', value: 60 },
  ];

  return (
    <div style={{ padding: '100px 0' }}>
      <div style={{ display: 'flex', marginBottom: '120px' }}>
        <Image
          width={596}
          height={596}
          alt={`Cover Image`}
          src={'/images/location.png'}
        />
        <div style={{ marginLeft: '80px' }}>
          <Overline>Why Cityfunds?</Overline>
          <Heading>Location, Location, Location</Heading>
          <PrimaryText>
            Investing in real estate is all about location, yet the increased
            cost of living have made desirable places unaffordable. Now, owning
            real estate in your favorite city takes less than 5 minutes.
          </PrimaryText>
          <PrimaryButton
            onClick={() => window.location.replace(EXTERNAL_ROUTES.WEB_APP)}
          >
            Get Started
          </PrimaryButton>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {STATS.map(({ label, value }) => (
          <div key={label}>
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              {/* <CountUp end={value}> */}
              {/* <Heading style={{ fontSize: '115px' }}>{value}+</Heading> */}
              {/* {({ countUpRef, start }) => ( */}
              {/* <div> */}
              {/* <span ref={countUpRef} /> */}
              {/* <button onClick={start}>Start</button> */}
              {/* </div> */}
              {/* )} */}
              {/* </CountUp> */}
              <GreenSquare />
            </div>
            <PrimaryText>{label}</PrimaryText>
          </div>
        ))}
      </div>
    </div>
  );
}
