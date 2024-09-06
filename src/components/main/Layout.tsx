import './Layout.scss';
import { FC, JSX } from 'react';
import Sidebar from '../sidebar/Sidebar.tsx';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../header/Header.tsx';
import Modal from '../modal/Modal.tsx';

const Layout: FC = (): JSX.Element => {

    return (
        <>
            <Modal />
            <Header/>
            <main>
                <Sidebar/>
                <Outlet/>
            </main>
        </>
    );
};

export default Layout;
