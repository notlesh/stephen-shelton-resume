import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import switchTheme from './Theme';

ReactDOM.render(<App />, document.getElementById('root'));

const urlParams = new URLSearchParams(window.location.search);

if (urlParams.has('theme')) {
  switchTheme(urlParams.get('theme'));
}
