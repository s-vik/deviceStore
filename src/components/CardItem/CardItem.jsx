import { Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";

const CardItem = ({ id, description, image, name, price }) => {
  return (
    <Col md={4}>
      <Card style={{ width: "18rem", margin: "15px" }} className="p-3">
        <Card.Img variant="top" src={image} style={{objectFit: "contain", height: "190px"}} />
        <Card.Body>
          <Card.Title className="badge">{name}</Card.Title>
          <Card.Text style={{"overflowY": "scroll", height: "100px"}}>
            {description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Price: {price} грн.</ListGroupItem>
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
