import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import signupReducer from "./Reducer/signupReducer";
import loginReducer from "./Reducer/loginReducer";

let rootReducer = combineReducers({
  signupReducer,
  loginReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export let store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
