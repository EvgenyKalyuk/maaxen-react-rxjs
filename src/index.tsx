import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from 'pages/app';
import { BrowserRouter } from 'react-router-dom';

import store from 'store';

import './theme/index.scss';

(() => {
    const rootNode = document.querySelector('#root');

    if (!rootNode) {
        throw Error('#root node not found');
    }

    render(
        (
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        ),
        rootNode
    );
})();
