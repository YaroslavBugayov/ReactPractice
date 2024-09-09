import './LeadForm.scss';
import {FC, JSX, MouseEvent} from "react";
import {RegisterOptions, SubmitHandler, useForm} from "react-hook-form";
import {useCreateLeadMutation} from "../../features/api/leads-api.ts";
import LeadCredentials from "../../models/lead-credentials.ts";
import {calculateAge} from "../../utils/data-utils.ts";
import InputField from "../input-field/InputField.tsx";
import ButtonSecondary from "../button-secondary/ButtonSecondary.tsx";
import ButtonMain from "../button-main/ButtonMain.tsx";

interface Field {
    name: string;
    label: string;
    placeholder: string;
    type?: 'text' | 'select' | 'date';
    selectOptions?: object;
    validateOptions?: RegisterOptions
}

interface FormData {
    name: string;
    lastName: string;
    birthDate: string;
    phone: string;
    sex: 'male' | 'female';
}

interface LeadFormProps {
    onClose: (e: MouseEvent<HTMLElement>) => void;
}

const fields: Field[] = [
    {
        label: "Прізвище:",
        placeholder: "Введіть прізвище",
        name: "lastName",
        validateOptions: {
            maxLength: 20,
            pattern: {
                value: /^[A-Za-zА-Яа-яЇїІіЄєҐґ'`-]+$/,
                message: "Прізвище не відповідає формату"
            }
        }
    },
    {
        label: "Ім'я:",
        placeholder: "Введіть ім'я",
        name: "name",
        validateOptions: {
            maxLength: 20,
            pattern: {
                value: /^[A-Za-zА-Яа-яЇїІіЄєҐґ'`-]+$/,
                message: "Ім'я не відповідає формату"
            }
        }
    },
    {
        label: "Дата народження:",
        placeholder: "Виберіть дату народження",
        name: "birthDate",
        type: "date"
    },
    {
        label: "Стать:",
        placeholder: "Виберіть стать",
        name: "sex",
        selectOptions: [
            {
                value: 'male',
                name: 'Чоловіча',
            },
            {
                value: 'female',
                name: 'Жіноча'
            }
        ],
        type: "select"
    },
    {
        label: "Номер телефону:",
        placeholder: "Введіть номер телефону",
        name: "phone",
        validateOptions: {
            pattern: {
                value: /^\d{3}-\d{3}-\d{4}$/,
                message: "Номер телефону не відповідає формату 999-999-9999"
            }
        }
    }
];

const LeadForm: FC<LeadFormProps> = ({ onClose }): JSX.Element => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
    const [createLead] = useCreateLeadMutation();

    const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
        try {
            const lead: LeadCredentials = {
                name: data.name,
                lastName: data.lastName,
                age: calculateAge(data.birthDate),
                phone: data.phone,
                sex: data.sex
            };

            await createLead(lead);
            reset();
        } catch (error) {
            console.error('Lead creation error: ' + error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-inputs">
                {fields.map((field: Field) => (
                    <InputField
                        register={register}
                        errors={errors}
                        key={field.name}
                        name={field.name}
                        placeholder={field.placeholder}
                        label={field.label}
                        type={field.type}
                        selectOptions={field.selectOptions}
                        validateOptions={field.validateOptions}
                    />
                ))}
            </div>
            <div className="footer">
                <ButtonSecondary type="button" onClick={onClose}>Відмінити</ButtonSecondary>
                <ButtonMain type="submit">Створити</ButtonMain>
            </div>
        </form>
    );
}

export default LeadForm;