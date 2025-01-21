import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.tsx';
import { HomePage } from './routes/HomePage.tsx';
import { SinglePostPage } from './routes/SinglePostPage.tsx';
import { SignUpPage } from './routes/SignUpPage.tsx';
import { SignInPage } from './routes/SignInPage.tsx';
import { EditProfilePage } from './routes/EditProfilePage.tsx';
import { CreateNewArticlePage } from './routes/CreateNewArticlePage.tsx';
import { EditArticlePage } from './routes/EditArticlePage.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/articles',
        element: <HomePage />,
      },
      {
        path: '/edit-profile',
        element: <EditProfilePage />,
      },
      {
        path: '/articles/:slug',
        element: <SinglePostPage />,
      },
      {
        path: '/login',
        element: <SignInPage />,
      },
      {
        path: '/register',
        element: <SignUpPage />,
      },
      {
        path: '/create-article',
        element: <CreateNewArticlePage />,
      },
      {
        path: '/edit-article/:slug',
        element: <EditArticlePage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
