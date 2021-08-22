import { combineReducers, createStore } from 'redux';

import viewportReducer from './reducers/viewport';

const reducers = {
  viewport: viewportReducer
};

const initStore = () => {
  const enhancer = (
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ serialize: true, trace: true })
  );

  if (!enhancer) {
    console.warn('Install Redux DevTools Extension to inspect the app state: ' +
      'https://github.com/zalmoxisus/redux-devtools-extension#installation')
  }

  return createStore(combineReducers(reducers), {}, enhancer);
};

export default initStore;
