import './Modal.scss';
import { FC, JSX, useEffect, MouseEvent, KeyboardEvent } from 'react';
import closeIcon from '../../assets/close.svg'

interface ModalProps {
    children: JSX.Element;
    title: string;
    onClose: (e?: MouseEvent<HTMLElement> | KeyboardEvent) => void;
}

const Modal: FC<ModalProps> = ({ children, title, onClose }): JSX.Element => {
    const handleEscapeDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleEscapeDown);

        return () => {
            document.removeEventListener('keydown', handleEscapeDown);
        };
    }, []);

    return (
        <div onClick={onClose} className="modal">
            <div className="modal-content">
                <div className="header">
                    <h2>{title}</h2>
                    <img onClick={onClose} src={closeIcon}  alt="close button"/>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;