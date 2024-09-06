import './ButtonMain.scss';
import { FC, JSX } from 'react';

interface ButtonMainProps {
    children?: JSX.Element;
    onClick?: () => void;
}

const ButtonMain: FC = ({ children = null, onClick }: ButtonMainProps): JSX.Element => {

    return (
        <button onClick={onClick} className="button-main">{children}</button>
    )
};

export default ButtonMain;
