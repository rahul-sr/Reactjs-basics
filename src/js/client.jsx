import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';
import App from './components/App.jsx';
import Header from './components/Header.jsx';

var app = document.getElementById('app');



ReactDOM.render(
  <HashRouter>
      <div>
        <Route path="/" component={App} />
        <Route path="/header" component={Header} />
      </div>
   </HashRouter >,app);


if(module.hot){
  module.hot.accept();
}
