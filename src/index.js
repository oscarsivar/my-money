import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
import App from './components/App.jsx';
import Income from './components/Income.jsx';


render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />               
    <Route path="/income" component={Income}/>
  </Router>
), document.getElementById('app'));


