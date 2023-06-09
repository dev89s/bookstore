import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import Root from './routes/Root';
import BooksPage from './routes/BooksPage';
import CategoryPage from './routes/CategoryPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Navigate to="/books" /> },
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

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
