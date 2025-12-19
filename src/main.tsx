import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import Home from './routes/Home';
import Contact from './routes/Contact';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import './fonts.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/project/:slug',
    element: <Home />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/about',
    element: <div>about</div>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);