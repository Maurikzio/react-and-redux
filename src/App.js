import React, { Fragment } from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './App.css';

import Users from './components/Users';
import Posts from './components/Posts';

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path='/' component={Users}/>
          <Route path='/my-posts/:id' component={Posts}/>
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
