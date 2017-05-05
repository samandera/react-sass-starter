import React from 'react';
import ReactDOM from 'react-dom';
import BootstrapComponent from './components/BootstrapComponent';
import '../sass/main.scss';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(BootstrapComponent),
    document.getElementById('mount')
  );
});
