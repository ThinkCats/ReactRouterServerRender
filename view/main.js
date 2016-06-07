import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route, browserHistory } from 'react-router';
import route from './route';

ReactDOM.render((
    <Router history={browserHistory}>
        {route}
    </Router>
),document.getElementById('app'));
