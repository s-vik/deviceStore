
const SET_FILTER_BY = "filter/SET_FILTER_BY";
const SET_PRICE_MIN = "filter/SET_PRICE_MIN"
const SET_PRICE_MAX = "filter/SET_PRICE_MAX"

const initialState = {
    filterBy: "price_low",
    priceMin: 0,
    priceMax: 10000
  };

  const filterReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_FILTER_BY:
        return {
          ...state,
          filterBy: action.filter,
        };
      case SET_PRICE_MIN:
        return {
          ...state,
          priceMin: action.priceMin,
        };
      case SET_PRICE_MAX:
        return {
          ...state,
          priceMax: action.priceMax,
        };
      default:
        return state;
    }
  };

  export const setFilterBy = (filter) => ({ type: SET_FILTER_BY, filter });
  export const setPriceMin = (priceMin) => ({ type: SET_PRICE_MIN, priceMin });
  export const setPriceMax = (priceMax) => ({ type: SET_PRICE_MAX, priceMax });

  export default filterReducer;