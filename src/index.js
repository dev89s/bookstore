import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import Root from './routes/Root';
import BooksPage from './routes/BooksPage';
import CategoryPage from './routes/CategoryPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <BooksPage /> },
      {
        path: '/books',
        element: <BooksPage />,
      },
      {
        path: '/categories',
        element: <CategoryPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
