import './Main.scss';
import { FC, JSX, useCallback } from 'react';
import Sidebar from '../sidebar/Sidebar.tsx';
import { Outlet, useNavigate } from 'react-router-dom';
import { AppPages } from '../../common/enums/app-pages.ts';

const Main: FC = (): JSX.Element => {

    return (
        <main>
            <Sidebar />
            <Outlet />
        </main>
    );
};

export default Main;
