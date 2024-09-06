import './ButtonSecondary.scss';
import { FC, JSX } from 'react';

interface ButtonMainProps {
    children?: JSX.Element;
    onClick?: () => void;
}

const ButtonSecondary: FC = ({ children = null, onClick }: ButtonMainProps): JSX.Element => {

    return (
        <button onClick={onClick} className="button-secondary">{children}</button>
    )
};

export default ButtonSecondary;
