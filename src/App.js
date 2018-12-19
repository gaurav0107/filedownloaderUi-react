//app.js
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DownloadRequestList from './DownloadRequestList';
import DownloadRequest from './Components/DownloadRequest';

class App extends Component {


  render() {
    const data = [{name: "saurabh"}];
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={DownloadRequestList}/>
          <Route path='/downloadRequest/:uuid' exact={true} component={DownloadRequest}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
