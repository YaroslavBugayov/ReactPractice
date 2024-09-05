import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import AppRoutes from '../common/enums/app-routes.ts';
import Main from '../components/main/Main.tsx';
import MainPage from '../components/main-page/MainPage.tsx';
import Leads from '../components/leads/Leads.tsx';

export const routerProvider: RouterProvider = createBrowserRouter([
    {
        path: AppRoutes.ROOT,
        element: <Main />,
        children: [
            {
                path: AppRoutes.ANY,
                element: <Navigate to={AppRoutes.MAIN} />
            },
            {
                path: AppRoutes.ROOT,
                element: <MainPage />
            },
            {
                path: AppRoutes.LEADS,
                element: <Leads />
            }
        ]
    }
]);