import { createStore } from 'redux';

const fakeReducer = (state = {}) => state;

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

  createStore(fakeReducer, {}, enhancer);
};

export default initStore;
