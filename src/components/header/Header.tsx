import './Header.scss';
import { FC, JSX, useEffect } from 'react';
import logo from '../../assets/logo.svg';

const Header: FC = (): JSX.Element => {

    return (
        <header>
            <img className='logo' src={logo}  alt='company logo'/>
        </header>
    )
};

export default Header;
