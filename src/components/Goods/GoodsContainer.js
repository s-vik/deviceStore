import { connect } from "react-redux";
import Goods from "./Goods";
import { getGoods } from "./../../redux/goods-reducer";
import { useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import orderBy from "lodash/orderBy";

const sortBy = (goods, filterBy, min, max) => {
  if(min) {
    goods = goods.filter(o=> o.price >= min)
  }
  if(max && min) {
    goods = goods.filter(o=> o.price >= min && o.price <= max )
  }
  switch (filterBy) {
    case "price_low":
      return orderBy(goods, "price", "asc");
    case "price_high":
      return orderBy(goods, "price", "desc");
    case "alphabet":
      return orderBy(goods, "name", "asc");
    default:
      return goods
  }
};

const GoodsContainer = ({ items, getGoods, currency, newGoods }) => {
 
  useEffect(() => {
    getGoods();
    newGoods.length > 0 && localStorage.setItem("newGoods", JSON.stringify(newGoods));
  }, [getGoods,newGoods]);

  return items ? <Goods currency={currency} items={items} /> : <Preloader />;
};

const mapStateToProps = ({goods,filter}) => ({
  items:goods.items && sortBy(goods.items, filter.filterBy, filter.priceMin, filter.priceMax),
  currency:goods.currency,
  newGoods:goods.newGoods
});

export default connect(mapStateToProps, { getGoods })(GoodsContainer);
