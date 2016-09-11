import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'TodoApp';

// load foundation
$(document).foundation();

require('style!css!sass!applicationStyles');


ReactDOM.render(
    <TodoApp/>,
    //<Router history={hashHistory}>
    //    <Route path="/" component={Main}>
    //        <IndexRoute   component={Timer}></IndexRoute>
    //        <Route path="countdown" component={Countdown}></Route>
    //    </Route>
    //</Router>,
    document.getElementById('app')
);
