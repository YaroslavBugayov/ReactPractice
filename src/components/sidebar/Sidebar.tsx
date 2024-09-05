import './Sidebar.scss';
import { FC, JSX, useCallback, useEffect } from 'react';
import ListItem from '../../ui/list-item/ListItem.tsx';
import AppRoutes from '../../common/enums/app-routes.ts';
import { useLocation, useNavigate } from 'react-router-dom';
import AppPages from '../../common/enums/app-pages.ts';

const Sidebar: FC = (): JSX.Element => {
    const navigate = useNavigate();
    const location = useLocation();

    const changePage = useCallback((route: AppPages) => {
        navigate(route);
    }, [navigate]);

    return (
        <div className="sidebar">
            <ListItem
                onClick={() => { changePage(AppRoutes.ROOT) }}
                isFocused={location.pathname === AppRoutes.ROOT}
            >Головна сторінка</ListItem>
            <ListItem
                onClick={() => { changePage(AppRoutes.LEADS) }}
                isFocused={location.pathname === AppRoutes.LEADS}
            >Всі ліди</ListItem>
        </div>
    );
};

export default Sidebar;
