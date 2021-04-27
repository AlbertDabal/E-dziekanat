import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root';
import { createStore } from 'redux';
import loginReducer from 'reducers';
import { Provider } from 'react-redux';

// eslint-disable-next-line no-underscore-dangle
const store = createStore(loginReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root'),
);
