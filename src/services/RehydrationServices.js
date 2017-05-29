import { persistStore } from 'redux-persist';
import localForage from 'localforage';

import actions from '../actions';

import ReduxPersist from '../config/ReduxPersist';

const updateReducers = store => {
  const reducerVersion = ReduxPersist.reducerVersion;
  const config = ReduxPersist.storeConfig;
  // Check to ensure latest reducer version
  localForage
    .getItem('reducerVersion')
    .then(localVersion => {
      if (localVersion !== reducerVersion) {
        // Purge store
        persistStore(store, config, () => {
          store.dispatch(actions.hydration.endHydration());
        }).purge();
        localForage.setItem('reducerVersion', reducerVersion);
      } else {
        persistStore(store, config, () => {
          store.dispatch(actions.hydration.endHydration());
        });
      }
    })
    .catch(() => {
      persistStore(store, config, () => {
        store.dispatch(actions.hydration.endHydration());
      });
      localForage.setItem('reducerVersion', reducerVersion);
    });
};

export default { updateReducers };
