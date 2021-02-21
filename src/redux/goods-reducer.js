import { goodsAPI } from "./../api/api";
import { setPriceMax } from "./filter-reducer";

const SET_GOODS = "goods/SET_GOODS";
const TOGGLE_CURRENCY_USD = "goods/TOGGLE_CURRENCY_USD";
const TOGGLE_CURRENCY_UAH = "goods/TOGGLE_CURRENCY_UAH";

const initialState = {
  items: null,
  isFetching: false,
  currency: "UAH",
};

const goodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GOODS:
      return {
        ...state,
        items: action.items,
      };
    case TOGGLE_CURRENCY_USD:
      return {
        ...state,
        items: state.items.map((item) => {
          item.price = Math.floor(item.price / 26);
          return item;
        }),
        currency: action.currency,
      };
    case TOGGLE_CURRENCY_UAH:
      return {
        ...state,
        items: state.items.map((item) => {
          item.price = Math.floor(item.price * 26);
          return item;
        }),
        currency: action.currency,
      };
    default:
      return state;
  }
};

const setGoods = (items) => ({ type: SET_GOODS, items });
export const toggleCurrencyUSD = (currency) => ({
  type: TOGGLE_CURRENCY_USD,
  currency,
});
export const toggleCurrencyUAH = (currency) => ({
  type: TOGGLE_CURRENCY_UAH,
  currency,
});

export const getGoods = () => {
  return async (dispatch) => {
    let { data } = await goodsAPI.getGoods().catch((err) => console.log(err));
    dispatch(setGoods(data.products));
    dispatch(
      setPriceMax(
        data.products.reduce((prev, cur) =>
          cur.price > prev.price ? cur : prev
        ).price
      )
    );
  };
};

export default goodsReducer;
