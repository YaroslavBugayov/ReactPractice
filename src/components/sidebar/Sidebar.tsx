import './Sidebar.scss';
import { FC, JSX } from 'react';
import ListItem from '../../ui/list-item/ListItem.tsx';
import AppRoutes from '../../common/enums/app-routes.ts';
import { Link } from 'react-router-dom';

const Sidebar: FC = (): JSX.Element => {
    return (
        <div className="sidebar">
            <Link to={AppRoutes.ROOT}>
                <ListItem route={AppRoutes.ROOT}>Головна сторінка</ListItem>
            </Link>
            <Link to={AppRoutes.LEADS}>
                <ListItem route={AppRoutes.LEADS}>Всі ліди</ListItem>
            </Link>
        </div>
    );
};

export default Sidebar;
