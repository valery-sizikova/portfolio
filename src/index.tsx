import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import DependecyInjectionSetup from './di-setup';
import { Routes } from 'src/routes';

import './styles.css';

DependecyInjectionSetup.setup();

ReactDOM.render(
  <Router>
    {Routes.getRoutes(location)}
  </Router>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
