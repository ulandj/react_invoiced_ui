import 'purecss/build/pure.css';
import 'styles/colors.sass';
import 'animate.css/animate.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import { Provider } from 'mobx-react';

import routes from './routes';
import stores from './stores';

ReactDOM.render(
  <Provider {...stores}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('app')
);
