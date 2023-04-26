import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Root from './pages/Root/root';
import NotFound from './pages/Not Found/NotFound';
import Home, { loader as homeLoader } from './pages/Home/Home';
import Logement, { loader as logementLoader } from './pages/Logement/Logement';
import APropos from './pages/A Propos/APropos';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        {
          path: '/',
          element: <Home />,
          loader: homeLoader,
        },
        {
          path: '/logements/:id',
          element: <Logement />,
          loader: logementLoader,
        },
        {
          path: '/a-propos',
          element: <APropos />,
        },
      ],
    },
  ],
  {
    basename: '/React-Kasa',
  }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
