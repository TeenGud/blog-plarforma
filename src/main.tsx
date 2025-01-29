// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.tsx';
import { HomePage } from './routes/HomePage.tsx';
import { SinglePostPage } from './routes/SinglePostPage.tsx';
import { SignUpPage } from './routes/SignUpPage.tsx';
import { SignInPage } from './routes/SignInPage.tsx';
import { EditProfilePage } from './routes/EditProfilePage.tsx';
import { CreateNewArticlePage } from './routes/CreateNewArticlePage.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { EditArticlePage } from './routes/EditArticlePage.tsx';
import { PrivateRoute } from './routes/PrivateRoute.tsx';

const queryClient = new QueryClient();

const router = createHashRouter([
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
        path: '/profile',
        element: (
          <PrivateRoute>
            <EditProfilePage />
          </PrivateRoute>
        ),
      },
      {
        path: '/articles/:slug',
        element: <SinglePostPage />,
      },
      {
        path: '/sign-in',
        element: <SignInPage />,
      },
      {
        path: '/sign-up',
        element: <SignUpPage />,
      },
      {
        path: '/new-article',
        element: (
          <PrivateRoute>
            <CreateNewArticlePage />
          </PrivateRoute>
        ),
      },
      {
        path: '/articles/:slug/edit',
        element: (
          <PrivateRoute>
            <EditArticlePage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </Provider>
);
