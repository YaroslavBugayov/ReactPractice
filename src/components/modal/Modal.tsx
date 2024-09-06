import './Modal.scss';
import { FC, JSX, useEffect } from 'react';
import InputField from '../../ui/input-field/InputField.tsx';
import ButtonMain from '../../ui/button-main/ButtonMain.tsx';
import ButtonSecondary from '../../ui/button-secondary/ButtonSecondary.tsx';
import closeIcon from '../../assets/close.svg'
import { SubmitHandler, useForm } from 'react-hook-form';
import { calculateAge } from '../../utils/data-utils.ts';
import { OptionsType } from '../../ui/custom-select/CustomSelect.tsx';
import LeadCredentials from '../../models/lead-credentials.ts';
import { useCreateLeadMutation } from '../../features/api/leads-api.ts';

const sexOptions: OptionsType[] = [
    {
        value: 'male',
        name: 'Чоловіча',
    },
    {
        value: 'female',
        name: 'Жіноча'
    }
];

interface FormData {
    name: string;
    lastName: string;
    birthDate: string;
    phone: string;
    sex: 'male' | 'female';
}

interface ModalProps {
    onClose: () => void;
}

const Modal: FC = ({ onClose }: ModalProps): JSX.Element => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<FormData>();
    const [createLead] = useCreateLeadMutation();

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            onClose();
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const onSubmit: SubmitHandler<FormData> = async data => {
        const lead: LeadCredentials = {
            name: data.name,
            lastName: data.lastName,
            age: calculateAge(data.birthDate),
            phone: data.phone,
            sex: data.sex
        };

        const newLead = await createLead(lead).unwrap();
        console.log(newLead);
        reset();
    };

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
                        <ButtonSecondary type="button" onClick={onClose}>Відмінити</ButtonSecondary>
                        <ButtonMain type="submit">Створити</ButtonMain>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;