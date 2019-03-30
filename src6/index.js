import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import Counter from './components/Counter';

import { Provider } from 'react-redux';
import store from './store'

render(<Provider store={store}>
    <React.Fragment>
        <Counter></Counter>
    </React.Fragment>
</Provider>, window.root);