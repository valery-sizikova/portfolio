import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import { Routes } from 'src/routes';

import './styles.css';

ReactDOM.render(
  <Router>
    {Routes.getRoutes(location)}
  </Router>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
