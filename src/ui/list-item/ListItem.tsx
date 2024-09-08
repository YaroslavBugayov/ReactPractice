import './ListItem.scss';
import { FC, JSX, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AppRoutes from '../../common/enums/app-routes.ts';

interface ListItemProps {
    children: JSX.Element;
    route: AppRoutes
}

const ListItem: FC = ({ children, route }: ListItemProps): JSX.Element => {
    const location = useLocation();

    return (
        <div className={`list-item ${location.pathname === route ? "list-item_focused" : "list-item_default"}`}>{children}</div>
    );
};

export default ListItem;
