import { Col } from "react-bootstrap";
import PriceField from "../PriceField/PriceField";
import Currency from "../Currency/Currency";
import Filter from "./../Filter/Filter";

const Sidebar = ({
  filterBy,
  priceMin,
  priceMax,
  setFilterBy,
  setPriceMin,
  setPriceMax,
  currency,
  toggleCurrencyUAH,
  toggleCurrencyUSD
}) => {
  return (
    <Col md={2} style={{ marginTop: "15px" }}>
      <Filter filterBy={filterBy} setFilterBy={setFilterBy} />
      <PriceField priceMin={priceMin} priceMax={priceMax} setPriceMin={setPriceMin} setPriceMax={setPriceMax} />
      <Currency currency={currency} toggleCurrencyUAH={toggleCurrencyUAH} toggleCurrencyUSD={toggleCurrencyUSD} />
    </Col>
  );
};

export default Sidebar;
