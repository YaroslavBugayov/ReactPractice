import { FC, JSX } from 'react';
import Sidebar from '../sidebar/Sidebar.tsx';
import Content from '../content/Content.tsx';

const Main: FC = (): JSX.Element => {

    return (
        <main>
            <Sidebar />
            <Content />
        </main>
    )
};

export default Main;
