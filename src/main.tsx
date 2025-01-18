import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.tsx';
import { HomePage } from './routes/HomePage.tsx';
import { SinglePostPage } from './routes/SinglePostPage.tsx';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      // {
      //   path: "/posts",
      //   element: <PostListPage />
      // },
      {
        path: '/:slug',
        element: <SinglePostPage />,
      },
      // {
      //   path: "/write",
      //   element: <WritePage />
      // },
      // {
      //   path: "/login",
      //   element: <LoginPage />
      // },
      // {
      //   path: "/register",
      //   element: <RegisterPage />
      // },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
