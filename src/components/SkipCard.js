import styled from 'styled-components';
import { FaRecycle, FaLeaf, FaExclamationTriangle } from 'react-icons/fa';

const Card = styled.div`
  background: ${props => props.$selected ? '#F1F8E9' : '#FFFFFF'};
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid ${props => props.$selected ? '#4CAF50' : 'rgba(76, 175, 80, 0.2)'};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    border-color: #4CAF50;
    background: #F1F8E9;
    box-shadow: 0 8px 20px rgba(76, 175, 80, 0.2);
  }
`;

const SkipVisual = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  margin-bottom: 1rem;
  overflow: hidden;
`;

const SkipSilhouette = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 120px;
  border: 3px solid #4CAF50;
  border-radius: 8px;
  background: ${props => props.$selected ? 'rgba(76, 175, 80, 0.3)' : 'transparent'};
  transition: background 0.3s ease;

  ${Card}:hover & {
    background: rgba(76, 175, 80, 0.3);
    &:before {
      opacity: 0.8;
    }
  }
`;

const PrivateLabel = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #1B4332; /* Dark green from app's background gradient */
  color: #FFFFFF;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 2;

  svg {
    font-size: 0.75rem;
    color: #A7C957; /* Yellowish-green from app's buttons */
  }
`;

const SkipText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #2E7D32;
  z-index: 1;
`;

const SizeText = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`;

const EcoText = styled.p`
  font-size: 0.9rem;
  color: #4CAF50;
  margin: 0.5rem 0 0;
  font-weight: 500;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin: 1rem 0;
`;

const InfoItem = styled.div`
  color: #2E7D32;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: #4CAF50;
  }
`;

const Period = styled.p`
  color: #2E7D32;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Price = styled.div`
  color: #4CAF50;
  font-size: 1.75rem;
  font-weight: 600;
  margin: 1rem 0;
  display: flex;
  align-items: baseline;
  gap: 0.25rem;

  span {
    font-size: 1rem;
    color: #388E3C;
  }
`;

const Button = styled.button`
  width: 100%;
  background: ${props => props.$selected ? '#4CAF50' : 'rgba(76, 175, 80, 0.1)'};
  color: ${props => props.$selected ? '#FFFFFF' : '#4CAF50'};
  padding: 0.875rem;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: ${props => props.$selected ? '#388E3C' : 'rgba(76, 175, 80, 0.2)'};
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const EcoLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4CAF50;
  font-size: 0.875rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(76, 175, 80, 0.2);
`;

const SkipCard = ({ 
  size, 
  hire_period_days, 
  price_before_vat, 
  selected, 
  onSelect,
  suitableFor,
  capacity,
  ecoImpact,
  isPrivate
}) => {
  return (
    <Card $selected={selected} onClick={onSelect}>
      <SkipVisual>
        <SkipSilhouette $selected={selected} />
        {isPrivate && (
          <PrivateLabel>
            <FaExclamationTriangle /> Private Property Only
          </PrivateLabel>
        )}
        <SkipText>
          <SizeText>{size} Skip</SizeText>
          <EcoText>{ecoImpact}</EcoText>
        </SkipText>
      </SkipVisual>
      <Period>
        <FaRecycle /> {hire_period_days} days
      </Period>
      <InfoGrid>
        <InfoItem>✓ {suitableFor}</InfoItem>
        <InfoItem>✓ {capacity}</InfoItem>
      </InfoGrid>
      <Price>
        £{price_before_vat} <span>per week</span>
      </Price>
      <Button $selected={selected}>
        {selected ? 'Selected' : 'Choose This Skip'} →
      </Button>
      <EcoLabel>
        <FaLeaf /> Sustainable Choice
      </EcoLabel>
    </Card>
  );
};

export default SkipCard;