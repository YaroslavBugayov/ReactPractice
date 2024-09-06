import './ButtonSecondary.scss';
import { FC, JSX } from 'react';

interface ButtonMainProps {
    children?: JSX.Element;
}

const ButtonSecondary: FC = ({ children = null }: ButtonMainProps): JSX.Element => {

    return (
        <button className="button-secondary">{children}</button>
    )
};

export default ButtonSecondary;
