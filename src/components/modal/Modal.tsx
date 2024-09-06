import './Modal.scss';
import { FC, JSX } from 'react';
import InputField from '../../ui/input-field/InputField.tsx';
import ButtonMain from '../../ui/button-main/ButtonMain.tsx';
import ButtonSecondary from '../../ui/button-secondary/ButtonSecondary.tsx';
import SelectField, { OptionType } from '../../ui/select-field/SelectField.tsx';
import closeIcon from '../../assets/close.svg'

const sexOptions: OptionType[] = [
    {
        value: 'male',
        name: 'Чоловіча',
    },
    {
        value: 'female',
        name: 'Жіноча'
    }
];

interface ModalProps {
    onClose: () => void;
}

const Modal: FC = ({ onClose }: ModalProps): JSX.Element => {

    return (
        <div onClick={onClose} className="modal">
            <div className="modal-content">
                <div className="header">
                    <h2>Створення ліда</h2>
                    <img onClick={onClose} src={closeIcon}  alt="close button"/>
                </div>
                <form>
                    <InputField label="Прізвище:" placeholder="Введіть прізвище" name="lastName"/>
                    <InputField label="Ім'я:" placeholder="Введіть ім'я" name="name"/>
                    <InputField label="Дата народження:" placeholder="Введіть дату народження" name="birthDate"/>
                    <SelectField label="Стать:" placeholder="Виберіть стать" name="sex" options={sexOptions}/>
                    <InputField label="Номер телефону:" placeholder="Введіть номер телефону" name="phone"/>
                </form>
                <div className="footer">
                    <ButtonSecondary onClick={onClose}>Відмінити</ButtonSecondary>
                    <ButtonMain>Створити</ButtonMain>
                </div>
            </div>
        </div>
    );
};

export default Modal;