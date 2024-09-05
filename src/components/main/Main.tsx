import './Main.scss';
import { FC, JSX, useCallback } from 'react';
import Sidebar from '../sidebar/Sidebar.tsx';
import { Outlet, useNavigate } from 'react-router-dom';

const Main: FC = (): JSX.Element => {

    return (
        <main>
            <Sidebar />
            <Outlet />
        </main>
    );
};

export default Main;
