import { combineReducers, createStore, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form";
import ReduxThunk from "redux-thunk";
import filterReducer from "./filter-reducer";
import goodsReducer from "./goods-reducer";

const reducers = combineReducers({
  goods: goodsReducer,
  filter: filterReducer,
  form: formReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default store;
