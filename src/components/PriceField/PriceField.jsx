import { Form } from "react-bootstrap";

const PriceField = ({setPriceMin ,setPriceMax ,priceMin,priceMax}) => {
  return (
    <Form>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>ot</Form.Label>
        <Form.Control type="number" value={priceMin} onChange={(e) => setPriceMin(e.target.value)}  />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>do</Form.Label>
        <Form.Control type="number" value={priceMax} onChange={(e) => setPriceMax(e.target.value)} />
      </Form.Group>
    </Form>
  );
};

export default PriceField;
