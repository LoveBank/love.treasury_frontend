import localForage from 'localforage';

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1',
  storeConfig: {
    storage: localForage,
    blacklist: ['hydration'], // reducer keys that you do NOT want stored to persistence here
    // whitelist: [], Optionally, just specify the keys you DO want stored to
    // persistence. An empty array means 'don't store any reducers'
    transforms: [],
  },
};

export default REDUX_PERSIST;
