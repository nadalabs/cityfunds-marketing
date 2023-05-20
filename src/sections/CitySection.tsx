import Image from 'next/image';
import { Heading1, Heading2, Text } from '../elements/Typography';

export default function CitySection({}) {
  const CITIES = [
    { name: 'Dallas', imageUrl: '/location.png', numProperties: 10 },
    { name: 'Austin', imageUrl: '/location.png', numProperties: 10 },
    { name: 'Miami', imageUrl: '/location.png', numProperties: 10 },
    { name: 'Tampa', imageUrl: '/location.png', numProperties: 10 },
  ];

  return (
    <div style={{ padding: '140px 0' }}>
      <Heading1>Pick your favorite, or invest in all four.</Heading1>
      <Heading2>
        Cityfunds is the only investment platform which provides direct access
        to diversified portfolios of owner-occupied homes in the nation’s top
        cities.
      </Heading2>

      <div style={{ display: 'flex', overflowX: 'scroll', width: '100%' }}>
        {CITIES.map(({ name, imageUrl, numProperties }) => (
          <div
            key={name}
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: 'cover',
              width: '450px',
              height: '450px',
              padding: '40px',
              marginRight: '28px',
            }}
          >
            <div>
              <Heading1>{name}</Heading1>
              <Text>{numProperties} Properties</Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
