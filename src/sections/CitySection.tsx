import styled from 'styled-components';
import {
  GreenSquare,
  Heading,
  PrimaryText,
  Text,
} from '../elements/Typography';

export default function CitySection({}) {
  const CITIES = [
    { name: 'Dallas', imageUrl: '/images/location.png', numProperties: 10 },
    { name: 'Austin', imageUrl: '/images/location.png', numProperties: 10 },
    { name: 'Miami', imageUrl: '/images/location.png', numProperties: 10 },
    { name: 'Tampa', imageUrl: '/images/location.png', numProperties: 10 },
  ];

  return (
    <div style={{ padding: '140px 0' }}>
      <Heading style={{ width: '766px' }}>
        Pick your favorite, or invest in all four.
      </Heading>
      <PrimaryText style={{ width: '1130px' }}>
        Cityfunds is the only investment platform which provides direct access
        to diversified portfolios of owner-occupied homes in the nation’s top
        cities.
      </PrimaryText>

      <div style={{ display: 'flex', overflowX: 'scroll', width: '100%' }}>
        {CITIES.map(({ name, imageUrl, numProperties }) => (
          <CardWrapper
            key={name}
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                <Heading style={{ color: 'white' }}>{name}</Heading>
                <GreenSquare
                  style={{ marginLeft: '4px', marginBottom: '18px' }}
                />
              </div>
              <Text style={{ color: 'white' }}>{numProperties} Properties</Text>
            </div>
          </CardWrapper>
        ))}
      </div>
    </div>
  );
}

export const CardWrapper = styled.div`
  background-size: cover;
  min-width: 450px;
  height: 450px;
  padding: 40px;
  margin-right: 28px;
  display: flex;
  align-items: flex-end;
`;
