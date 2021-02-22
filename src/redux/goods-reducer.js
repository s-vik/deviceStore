import { goodsAPI } from "./../api/api";
import { setPriceMax } from "./filter-reducer";

const SET_GOODS = "goods/SET_GOODS";
const TOGGLE_CURRENCY_USD = "goods/TOGGLE_CURRENCY_USD";
const TOGGLE_CURRENCY_UAH = "goods/TOGGLE_CURRENCY_UAH";
const SET_NEW_GOODS = "goods/SET_NEW_GOODS";
const ADD_NEW_GOODS = "goods/ADD_NEW_GOODS";

const initialState = {
  items: null,
  currency: "UAH",
  newGoods: [],
};

const goodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GOODS:
      return {
        ...state,
        items: action.items,
      };
    case ADD_NEW_GOODS:
      return {
        ...state,
        items: [...state.items, action.items]
      };
    case SET_NEW_GOODS:
      return {
        ...state,
        newGoods: [...state.newGoods, action.item],
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
const addNewGoods = (items) => ({type: ADD_NEW_GOODS, items});

export const setNewGoods = (item) => ({ type: SET_NEW_GOODS, item });

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
    const localGoods = JSON.parse(localStorage.getItem("newGoods"));
    if(localGoods){
      localGoods.map(cur=>{
      return dispatch(addNewGoods(cur))
    })
    }
       
    
  };
};

export default goodsReducer;
