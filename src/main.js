import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import BootstrapComponent from './components/BootstrapComponent';
import '../sass/main.scss';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Provider>
      <BootstrapComponent/>
    </Provider>,
    document.getElementById('mount')
  );
});
