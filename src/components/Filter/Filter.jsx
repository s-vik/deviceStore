import { Col, Form } from "react-bootstrap";

const Filter = ({ filterBy, setFilterBy }) => {
  return (
    <fieldset>
      <Form.Group>
        <Form.Label as="legend" column sm={2}>
          Сортировка
        </Form.Label>
        <Col>
          <Form.Check
            checked={filterBy === "price_low"}
            type="radio"
            label="Price low"
            name="filter"
            id="price_low"
            onChange={setFilterBy.bind(this,"price_low")}
          />
          <Form.Check
            checked={filterBy === "price_high"}
            type="radio"
            label="Price high"
            name="filter"
            id="price_high"
            onChange={setFilterBy.bind(this,"price_high")}
          />
          <Form.Check
            checked={filterBy === "alphabet"}
            type="radio"
            label="Alphabet"
            name="filter"
            id="alphabet"
            onChange={setFilterBy.bind(this,"alphabet")}
          />
        </Col>
      </Form.Group>
    </fieldset>
  );
};
export default Filter;
