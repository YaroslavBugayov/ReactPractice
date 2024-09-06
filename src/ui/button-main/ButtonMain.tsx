import './ButtonMain.scss';
import { FC, JSX } from 'react';

interface ButtonMainProps {
    children?: JSX.Element;
}

const ButtonMain: FC = ({ children = null }: ButtonMainProps): JSX.Element => {

    return (
        <button className="button-main">{children}</button>
    )
};

export default ButtonMain;
