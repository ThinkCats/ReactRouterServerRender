import React from 'react';
import {Route} from 'react-router';
import App from './component/App';
import Home from './component/Home';
import Content from './component/Content';

export default (
    <Route component={App}>
        <Route path="/" component={Home}/>
        <Route path="/content" component={Content}/>
    </Route>
)
