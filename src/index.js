import React from 'react';
import ReactDOM from 'react-dom';
import MainView from './views/MainView';

import './styles/base.scss';

ReactDOM.render(
  <React.StrictMode>
    <MainView />
  </React.StrictMode>,
  document.getElementById('root')
);
