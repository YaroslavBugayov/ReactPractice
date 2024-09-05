import './ListItem.scss';
import { FC, JSX, useState } from 'react';

interface ListItemProps {
    itemText: string;
    isFocused: boolean;
}

const ListItem: FC = ({ itemText, isFocused = false }: ListItemProps): JSX.Element => {

    return (
        <div className={`list-item ${isFocused ? "list-item_focused" : "list-item_default"}`}>{itemText}</div>
    );
};

export default ListItem;
