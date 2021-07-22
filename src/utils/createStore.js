import { handleRequests } from "gw2-ui";

import { applyMiddleware, combineReducers, compose, createStore as reduxCreateStore } from "redux";

const { requestsReducer, requestsMiddleware } = handleRequests();

const reducers = combineReducers({
  requests: requestsReducer,
});

const composeEnhancers =
  (typeof window !== 'undefined' &&
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export default () => {
  const store = reduxCreateStore(
    reducers,
    composeEnhancers(applyMiddleware(...requestsMiddleware)),
  );



  return store;
};
