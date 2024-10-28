import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './store/store.tsx';

import './index.css';

/* const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
  },
]); */

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
