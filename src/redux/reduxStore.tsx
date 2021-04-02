import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import thunk from "redux-thunk";

let reducers = combineReducers({

});

let store: Store  = createStore(reducers, applyMiddleware(thunk));

export type AppStateType = ReturnType<typeof reducers>

export default store;