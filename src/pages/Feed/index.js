import { Row, Col } from 'react-bootstrap';

import PropertyList from './components/PropertyList';

export default function Feed() {
  return (
    <Row>
      <Col>
      </Col>
      <Col lg={8}>
        <PropertyList />
      </Col>
      <Col>
      </Col>
    </Row>
  );
}
