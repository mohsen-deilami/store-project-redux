
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from './assets/app/store';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    </Provider>,
)
