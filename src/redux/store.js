import { applyMiddleware, legacy_createStore as createStore } from "redux";
// import { legacy_createStore as createStore } from "redux";
// import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [];

// const store = createStore()
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;