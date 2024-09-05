import './Sidebar.scss';
import { FC, JSX } from 'react';
import ListItem from '../../ui/list-item/ListItem.tsx';

const Sidebar: FC = (): JSX.Element => {

    return (
        <div className="sidebar">
            <ListItem itemText="Головна сторінка" isFocused={true} />
            <ListItem itemText="Всі ліди" />
        </div>
    );
};

export default Sidebar;
