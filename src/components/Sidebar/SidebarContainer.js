import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import {
  setFilterBy,
  setPriceMin,
  setPriceMax,
} from "./../../redux/filter-reducer";
import {
  toggleCurrencyUSD,
  toggleCurrencyUAH,
} from "./../../redux/goods-reducer";

const mapStateToProps = ({ filter, goods }) => ({
  filterBy: filter.filterBy,
  priceMin: filter.priceMin,
  priceMax: filter.priceMax,
  currency: goods.currency,
});

export default connect(mapStateToProps, {
  setFilterBy,
  setPriceMin,
  setPriceMax,
  toggleCurrencyUSD,
  toggleCurrencyUAH,
})(Sidebar);
