import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppRoutes } from '../common/enums/app-routes.ts';
import Layout from '../components/layout/Layout.tsx';

export const routerProvider: RouterProvider = createBrowserRouter([
    {
        path: AppRoutes.HOME,
        element: <Layout />,
        children: [
            {

            }
        ]
    }
]);