import { useState } from 'react';
import styled from 'styled-components';
import SkipCard from './components/SkipCard';
import { skipsData } from './mockData/MockData';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1B4332 0%, #081C15 100%);
  padding: 2rem;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
  color: #F1F5E9;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 3px;
    background: linear-gradient(90deg, #A7C957, #87A347);
    border-radius: 2px;
  }
`;

const Subtitle = styled.p`
  color: #A7C957;
  font-size: 1.125rem;
  max-width: 600px;
  margin: 1.5rem auto 0;
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1400px;
  margin: 2rem auto 0;
`;

const NavButton = styled.button`
  background: ${props => props.$primary ? '#A7C957' : 'transparent'};
  color: ${props => props.$primary ? '#1B4332' : '#A7C957'};
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: ${props => props.$primary ? 'none' : '2px solid #A7C957'};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: ${props => props.$primary ? '#87A347' : 'rgba(167, 201, 87, 0.1)'};
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const EcoInfo = styled.div`
  text-align: center;
  color: #A7C957;
  margin: 2rem auto;
  max-width: 800px;
  padding: 1.5rem;
  border-radius: 12px;
  background: rgba(27, 67, 50, 0.6);
  border: 1px solid rgba(167, 201, 87, 0.2);
  backdrop-filter: blur(10px);
`;

function App() {
  const [selectedSkip, setSelectedSkip] = useState(null);

  return (
    <Container>
      <Header>
        <Title>Sustainable Waste Solutions</Title>
        <Subtitle>
          Choose an eco-friendly skip size for your project. We're committed to recycling and 
          reducing environmental impact with every collection.
        </Subtitle>
      </Header>

      <EcoInfo>
        🌱 All our skips are processed through our recycling center, ensuring maximum material recovery
        and minimal environmental impact.
      </EcoInfo>

      <Grid>
        {skipsData.map(skip => (
          <SkipCard
            key={skip.id}
            {...skip}
            selected={selectedSkip === skip.id}
            onSelect={() => setSelectedSkip(skip.id)}
          />
        ))}
      </Grid>

      <Navigation>
        <NavButton>← Back</NavButton>
        <NavButton $primary disabled={!selectedSkip}>
          Continue to Booking →
        </NavButton>
      </Navigation>
    </Container>
  );
}

export default App