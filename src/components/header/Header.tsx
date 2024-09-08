import './Header.scss';
import { FC, JSX } from 'react';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import AppRoutes from '../../common/enums/app-routes.ts';

const Header: FC = (): JSX.Element => {

    return (
        <header>
            <Link to={AppRoutes.ROOT}><img className="logo" src={logo} alt="company logo"/></Link>
        </header>
    )
};

export default Header;
