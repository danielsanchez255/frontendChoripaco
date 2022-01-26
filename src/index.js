import React from 'react';
import ReactDOM from 'react-dom';

import Router from './routes/Router.js';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './services/reducers/index.js';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <Router />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);