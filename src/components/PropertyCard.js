import { Card } from 'react-bootstrap';
import { string } from 'prop-types';
import styled from 'styled-components';

const CardContainer = styled.div`
  margin: 1rem .5rem;
`;

export default function PropertyCard({ title, description }) {
  return (
    <CardContainer>
      <Card>
        <Card.Img variant='top' />
        <Card.Body>
          <Card.Title>
            {title}
          </Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>

        </Card.Footer>
      </Card>
    </CardContainer>
  );
}

PropertyCard.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
};
