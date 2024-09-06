import './ButtonMain.scss';
import { FC, JSX } from 'react';

interface ButtonMainProps {
    children?: JSX.Element;
    onClick?: () => void;
    type?: 'button' | 'submit';
}

const ButtonMain: FC = ({ children = null, onClick, type = "button" }: ButtonMainProps): JSX.Element => {

    return (
        <button type={type} onClick={onClick} className="button-main">{children}</button>
    );
};

export default ButtonMain;
