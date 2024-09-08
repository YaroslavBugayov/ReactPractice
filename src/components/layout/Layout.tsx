import './Layout.scss';
import { FC, JSX } from 'react';
import Sidebar from '../sidebar/Sidebar.tsx';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../header/Header.tsx';

const Layout: FC = (): JSX.Element => {
    return (
        <>
            <Header/>
            <main>
                <Sidebar/>
                <Outlet/>
            </main>
        </>
    );
};

export default Layout;
