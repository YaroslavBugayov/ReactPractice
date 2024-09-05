import { FC, JSX } from 'react';
import Header from '../header/Header.tsx';
import Main from '../main/Main.tsx';

const Layout: FC = (): JSX.Element => {

    return (
        <>
            <Header />
            <Main />
        </>
    )
};

export default Layout;
