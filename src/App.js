import React, { Component } from 'react';
import FullScreenVidBg from './components/video-background.js';
import Home from './components/home.js';
import Issues from './components/issues-page.js';

import './App.css';


let ReactRouter = require('react-router-dom');
let Router = ReactRouter.BrowserRouter;
let Route = ReactRouter.Route;
let Switch = ReactRouter.Switch;


class App extends Component {

  render() {
  let bgVid = require('./assets/videos/NBA.mp4');
  let bgPoser = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg"
  
    return (
      <Router>
        <div className="App">
           <FullScreenVidBg poster={bgPoser} mp4={bgVid} webM=""/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/completed' component={Issues}/>
            </Switch>
        </div>
      </Router>  
    );
  }
}

export default App;
