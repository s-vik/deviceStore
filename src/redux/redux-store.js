import { combineReducers, createStore, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form";
import ReduxThunk from "redux-thunk";
import goodsReducer from "./goods-reducer";

const reducers = combineReducers({
  goods: goodsReducer,
  form: formReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default store;
