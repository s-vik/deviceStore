import { Form } from "react-bootstrap";

const PriceField = ({setPriceMin ,setPriceMax ,priceMin,priceMax}) => {
  return (
    <Form>
    <Form.Label className="h5" as="legend" column sm={2}>
          Цена
        </Form.Label>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>От</Form.Label>
        <Form.Control type="number" value={priceMin} onChange={(e) => setPriceMin(e.target.value)}  />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>До</Form.Label>
        <Form.Control type="number" value={priceMax} onChange={(e) => setPriceMax(e.target.value)} />
      </Form.Group>
    </Form>
  );
};

export default PriceField;
