import { Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";

const CardItem = ({ id, description, image, name, price }) => {
  return (
    <Col md={4}>
    
      <Card style={{ width: "18rem", margin: "15px" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text style={{"overflowY": "scroll", height: "100px"}}>
            {description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Price: {price}</ListGroupItem>
        </ListGroup>
        {/* <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body> */}
      </Card>
      
    </Col>
  );
};

export default CardItem;
