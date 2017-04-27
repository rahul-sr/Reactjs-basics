import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import '../../scss/style.scss';
import '../store/counter.jsx';

var app = document.getElementById('app');

export default class App extends React.Component {
  render () {
    return (
    	<div>
        <Header/>
        <div className="heading"> Hello, World !</div>
        <p>It is {new Date().toLocaleTimeString()}.</p>
        <Footer/>
      </div>
    );
  }
}


