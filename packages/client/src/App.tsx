import React, { useState, useEffect } from 'react';
import Login from './screens/Login';
import Loading from './screens/Loading';
import Waiting from './screens/Waiting';
import Authentication from './screens/Authentication';
import { useAppSelector, useAppDispatch } from './hooks';
import { connected } from './slices/connected';

import './reset.css';
import './App.css';

export default function App() {
  const loaded = useAppSelector((state) => state.connection_state.is_connected);
  const authenticated = useAppSelector((state) => state.authenticated.is_authenticated);
  if (loaded) {
    if (authenticated) {
      return (<Waiting />);
    } else {
      return (<Authentication />);
    }
  } else {
    return (<Loading />);
  }
}
