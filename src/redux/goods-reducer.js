import { goodsAPI } from "./../api/api";

const SET_GOODS = "goods/SET_GOODS";

const initialState = {
  items: null,
  isFetching: false
};

const goodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GOODS:
      return {
        ...state,
        items: action.items,
      };
    default:
      return state;
  }
};

const setGoods = (items) => ({ type: SET_GOODS, items });


export const getGoods = () => {
  return async (dispatch) => {
    let response = await goodsAPI.getGoods().catch((err) => console.log(err));
    dispatch(setGoods(response.data.products));
  };
};

export default goodsReducer;
