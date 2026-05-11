import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import Home from './routes/Home';
import Contact from './routes/Contact';
import NotFound from './routes/NotFound';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import './fonts.css';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    registrations.forEach(r => r.unregister());
  });
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/project/:slug',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/contact',
    element: <Contact />,
    errorElement: <NotFound />,
  },
  {
    path: '/404',
    element: <NotFound />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);