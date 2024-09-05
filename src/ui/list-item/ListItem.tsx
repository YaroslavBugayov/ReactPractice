import './ListItem.scss';
import { FC, JSX, useState } from 'react';

interface ListItemProps {
    itemText: string;
    isFocused: boolean;
    onClick: () => void;
}

const ListItem: FC = ({ itemText, isFocused = false, onClick }: ListItemProps): JSX.Element => {

    return (
        <div onClick={onClick} className={`list-item ${isFocused ? "list-item_focused" : "list-item_default"}`}>{itemText}</div>
    );
};

export default ListItem;
