import { createBrowserRouter } from 'react-router-dom';

// Pages
import ClientPage from '../pages/client';
import AdminPage from '../pages/admin';
import NotFoundPage from '../pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path : '/',
    element : <ClientPage />, 
    errorElement : <NotFoundPage />
  },
  {
    path : '/admin',
    element : <AdminPage />,
    errorElement : <NotFoundPage />
  },
])