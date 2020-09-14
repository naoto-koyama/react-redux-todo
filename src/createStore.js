import {applyMiddleware, combineReducers, createStore as reduxCreateStore} from "redux"
import {todoReducer} from "./reducers/Todo";
import logger from "redux-logger";

export default function createStore() {
  const store = reduxCreateStore(
    combineReducers({
      todo: todoReducer
    }),
    applyMiddleware(logger)
  )

  return store;
}