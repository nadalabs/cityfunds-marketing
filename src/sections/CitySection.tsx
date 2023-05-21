import styled from 'styled-components';
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
      <Heading1 style={{width: '766px'}}>Pick your favorite, or invest in all four.</Heading1>
      <Heading2 style={{width: '1130px'}}>
        Cityfunds is the only investment platform which provides direct access
        to diversified portfolios of owner-occupied homes in the nation’s top
        cities.
      </Heading2>

      <div style={{ display: 'flex', overflowX: 'scroll', width: '100%' }}>
        {CITIES.map(({ name, imageUrl, numProperties }) => (
          <CardWrapper key={name} style={{ backgroundImage: `url(${imageUrl})` }}>
            <div>
              <Heading1 style={{color: 'white'}}>{name}</Heading1>
              <Text  style={{color: 'white'}}>{numProperties} Properties</Text>
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
