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
    errors?: object;
    register: UseFormRegister<{name: string}>;
    validateOptions: object;
    selectOptions?: OptionsType[]
}

const InputField: FC = ({label, errors, type="text", ...customAttributes}: InputFieldProps): JSX.Element => {
    return (
        <div className="input-field">
            <label>{label}</label>
            {type === "text"
                ? <CustomInput {...customAttributes} errors={errors} />
                : type === 'select'
                    ? <CustomSelect {...customAttributes} errors={errors} />
                    : type === 'date'
                        ? <CustomDate {...customAttributes} errors={errors} />
                        : null}
        </div>
    );
};

export default InputField;
