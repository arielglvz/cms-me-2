import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import store from './redux/store';
import { Provider } from 'react-redux';
import './index.scss'
import App from './app';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
