import './InputField.scss';
import { FC, JSX } from 'react';
import { UseFormRegister } from 'react-hook-form';
import CustomInput from '../custom-input/CustomInput.tsx';
import CustomSelect, { OptionsType } from '../custom-select/CustomSelect.tsx';
import CustomDate from '../custom-date/CustomDate.tsx';

interface InputFieldProps {
    label: string;
    type: 'text' | 'select' | 'date';
    name: string;
    placeholder: string;
    description?: string;
    error?: string;
    register: UseFormRegister<{name: string}>;
    validateOptions: object;
    selectOptions?: OptionsType[]
}

const InputField: FC = ({label, description, error, type="text", ...customAttributes}: InputFieldProps): JSX.Element => {
    return (
        <div className="input-field">
            <label>{label}</label>
            {type === "text"
                ? <CustomInput {...customAttributes} />
                : type === 'select'
                    ? <CustomSelect {...customAttributes} />
                    : type === 'date'
                        ? <CustomDate {...customAttributes} />
                        : null}
        </div>
    );
};

export default InputField;
