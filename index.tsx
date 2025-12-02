import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Buffer } from 'buffer';

if (typeof globalThis.Buffer === 'undefined') {
    globalThis.Buffer = Buffer;
}

if (typeof globalThis.process === 'undefined') {
    globalThis.process = {
        env: {},
    } as any;
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);