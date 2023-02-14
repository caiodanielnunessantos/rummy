import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import './connection';
import App from './App';
import { FullScreen, ContainerH, ContainerV, SectionH, SectionV } from './components/FixedSection';

import Loading from './screens/Loading';
import Login from './screens/Login';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
