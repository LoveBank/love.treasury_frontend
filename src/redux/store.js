import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { autoRehydrate } from 'redux-persist';
import reducers from '../reducers';
import ReduxPersist from '../config/ReduxPersist';
import RehydrationServices from '../services/RehydrationServices';

const store = createStore(
  combineReducers({
    ...reducers,
  }),
  autoRehydrate(),
);

if (ReduxPersist.active) {
  RehydrationServices.updateReducers(store);
}

export default store;
