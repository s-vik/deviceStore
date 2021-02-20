import { connect } from "react-redux";
import Goods from "./Goods";
import { getGoods } from "./../../redux/goods-reducer";
import { useEffect } from 'react';
import Preloader from "../Preloader/Preloader";

const GoodsContainer = ({ items, getGoods }) => {
    useEffect(()=>{
        getGoods()
    },[getGoods])
  return items? <Goods items={items} />: <Preloader />;
};

const mapStateToProps = ({ goods }) => ({
  items: goods.items,
});

export default connect(mapStateToProps, { getGoods })(GoodsContainer);
