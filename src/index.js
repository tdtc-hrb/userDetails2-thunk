import { createRoot } from "react-dom/client";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk'; // v3
// import thunk from 'redux-thunk'; // v2
import { createLogger } from 'redux-logger';
import reducer from './reducers';

const middleware = [ thunk ];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

const root = createRoot(document.getElementById('root'));
root.render(<Provider store={store}>
        <App />
    </Provider>);

registerServiceWorker();
