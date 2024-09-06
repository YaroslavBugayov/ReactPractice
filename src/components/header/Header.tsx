import './Header.scss';
import { FC, JSX, useEffect } from 'react';
import logo from '../../assets/logo.svg';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import AppRoutes from '../../common/enums/app-routes.ts';

const Header: FC = (): JSX.Element => {

    return (
        <header>
            <Link to={AppRoutes.ROOT}><img className="logo" src={logo} alt="company logo"/></Link>
        </header>
    )
};

export default Header;
