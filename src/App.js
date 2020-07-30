import React, { Fragment } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Users from './components/Users';
import Posts from './components/Posts'

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path='/' component={Users}/>
          <Route path='/:id' component={Posts}/>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
