import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';
import App from './components/App.jsx';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Form from './components/Form.jsx';
import Todo from './components/Todo.jsx';

var app = document.getElementById('app');



ReactDOM.render(
  <HashRouter>
      <div>
        <Route path="/home" component={Home} />
        <Route path="/todo" component={Todo} />
        <Route path="/app" component={App} />
        <Route path="/header" component={Header} />
        <Route path="/form" component={Form} />
      </div>
   </HashRouter >,app);


if(module.hot){
  module.hot.accept();
}
