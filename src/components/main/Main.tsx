import './Main.scss';
import { FC, JSX } from 'react';
import Sidebar from '../sidebar/Sidebar.tsx';
import { Outlet } from 'react-router-dom';

const Main: FC = (): JSX.Element => {

    return (
        <main>
            <Sidebar />
            <Outlet />
        </main>
    )
};

export default Main;
