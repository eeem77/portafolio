import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item(props) {
  return (
    <Col xs={12} md={6} className='pt-3'>
      <Card>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Text><span style={{ fontSize: 'x-large' }}>{props.title}</span></Card.Text>
          <div>
              {props.text}
          </div>
          <Button href={props.link} variant="primary">Web</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;