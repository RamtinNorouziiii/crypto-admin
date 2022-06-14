import { applyMiddleware, createStore } from "redux";
import { AllReducers } from "../reducers";
import createSagaMiddleware from "redux-saga";
import { RootSaga } from "../sagas";
const sagaMiddleWare = createSagaMiddleware();
export const Store = createStore(AllReducers,{}, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(RootSaga);
