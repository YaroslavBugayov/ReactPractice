import './ButtonSecondary.scss';
import { FC, JSX } from 'react';

interface ButtonSecondaryProps {
    children?: JSX.Element;
    onClick?: () => void;
    type?: 'button' | 'reset';
}

const ButtonSecondary: FC = ({ children = null, onClick, type = "button" }: ButtonSecondaryProps): JSX.Element => {

    return (
        <button type={type} onClick={onClick} className="button-secondary">{children}</button>
    )
};

export default ButtonSecondary;
