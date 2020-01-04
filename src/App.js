import React, { Component } from 'react';
import "./App.css";
import {BrowserRouter, Route } from 'react-router-dom';
import MyHeadingComponent from './Contents/HeadingComponent/myHeading';
import MyDateQuoteComponent from './Contents/DateQuoteComponent/MyDateQuoteComponent';
import MyMainContentComponent from './Contents/MainComponent/MyMainContentComponent';
import MyFooterComponent from './Contents/FooterComponent/MyFooterComponent';
import LoginComponent from './Contents/LoginComponent/LoginComponent';
import RegisterComponent from './Contents/RegisterComponent/RegisterComponent';

class App extends Component {
	
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <MyHeadingComponent />
        <MyDateQuoteComponent />
        <Route exact path="/" component={LoginComponent} />
        <Route exact path="/main" component={MyMainContentComponent} />
        <Route path="/register" component={RegisterComponent} />
        <MyFooterComponent />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
