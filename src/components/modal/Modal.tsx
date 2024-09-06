import './Modal.scss';
import { FC, JSX } from 'react';
import InputField from '../../ui/input-field/InputField.tsx';
import ButtonMain from '../../ui/button-main/ButtonMain.tsx';
import ButtonSecondary from '../../ui/button-secondary/ButtonSecondary.tsx';
import CustomSelect, { OptionType } from '../../ui/custom-select/CustomSelect.tsx';
import closeIcon from '../../assets/close.svg'
import { useForm } from 'react-hook-form';

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
    const { register, handleSubmit, watch, formState } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div onClick={onClose} className="modal">
            <div className="modal-content">
                <div className="header">
                    <h2>Створення ліда</h2>
                    <img onClick={onClose} src={closeIcon}  alt="close button"/>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-inputs">
                        <InputField
                            register={register}
                            label="Прізвище:"
                            placeholder="Введіть прізвище"
                            name="lastName"
                        />
                        <InputField
                            register={register}
                            label="Ім'я:"
                            placeholder="Введіть ім'я"
                            name="name"
                        />
                        <InputField
                            register={register}
                            label="Дата народження:"
                            placeholder="Виберіть дату народження"
                            name="birthDate"
                            type="date"
                        />
                        <InputField
                            register={register}
                            label="Стать:"
                            placeholder="Виберіть стать"
                            name="sex"
                            selectOptions={sexOptions}
                            type="select"
                        />
                        <InputField
                            register={register}
                            label="Номер телефону:"
                            placeholder="Введіть номер телефону"
                            name="phone"
                        />
                    </div>
                    <div className="footer">
                        <ButtonSecondary onClick={onClose}>Відмінити</ButtonSecondary>
                        <ButtonMain>Створити</ButtonMain>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;