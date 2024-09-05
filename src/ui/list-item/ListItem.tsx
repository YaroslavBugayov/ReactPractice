import './ListItem.scss';
import { FC, JSX, useState } from 'react';

interface ListItemProps {
    children: JSX.Element;
    isFocused: boolean;
    onClick: () => void;
}

const ListItem: FC = ({ children, isFocused = false, onClick }: ListItemProps): JSX.Element => {

    return (
        <div onClick={onClick} className={`list-item ${isFocused ? "list-item_focused" : "list-item_default"}`}>{children}</div>
    );
};

export default ListItem;
