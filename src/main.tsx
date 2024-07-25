import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import Experience from './routes/experience';
import Home from './routes/Home';

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
    path: '/about',
    element: <div>about</div>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);