import React from 'react';
import { render } from 'react-dom';
import App from './App';
import store from './redux/createStore';
import { Provider } from 'react-redux';

const rootEl = document.getElementById('root');
render(
    <Provider
        store={store}
    >
        <App />
    </Provider>,
    rootEl
);
