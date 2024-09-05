import './ButtonMain.scss';
import { FC, JSX } from 'react';

interface ButtonMainProps {
    children?: JSX.Element;
}

const ButtonMain: FC = ({ children = null }: ButtonMainProps): JSX.Element => {

    return (
        <button>{children}</button>
    )
};

export default ButtonMain;
