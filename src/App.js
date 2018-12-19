import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DownloadRequestList from './DownloadRequestList';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={DownloadRequestList}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
