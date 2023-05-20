import Image from 'next/image';
import { Heading1, Heading2 } from '../elements/Typography';
import { PrimaryButton } from '../elements/Buttons';

export default function LocationSection({}) {
  return (
    <div style={{ display: 'flex' }}>
      <Image
        className="w-full h-auto"
        width={456}
        height={456}
        alt={`Cover Image`}
        src={'/location.png'}
        sizes="100vw"
        // priority={priority}
      />
      <div style={{ marginLeft: '80px' }}>
        <Heading1>Location, Location, Location</Heading1>
        <Heading2>
          Everyone knows real estate investing is about location - yet
          traditional real estate investing isn’t set up this way. Now everyone
          can own real estate in their favorite city in less than 5 minutes
        </Heading2>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </div>
  );
}
