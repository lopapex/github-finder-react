import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { register } from './serviceWorkerRegistration';

const el = document.getElementById('root')
if (el === null) throw new Error('Root container missing in index.html')

const root = ReactDOM.createRoot(el)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)

register();


