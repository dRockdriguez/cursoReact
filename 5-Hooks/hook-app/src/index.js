import React from 'react';
import ReactDOM from 'react-dom';
import { CounterApp } from './components/01-useState/CounterApp';
import { CounterCustomHook } from './components/01-useState/CounterCustomHook';
import { HookApp } from './HookApp';

ReactDOM.render(
  <React.StrictMode>
    <CounterCustomHook />
  </React.StrictMode>,
  document.getElementById('root')
);
