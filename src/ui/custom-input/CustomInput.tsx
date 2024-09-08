import './CustomInput.scss';
import {FC, JSX, useEffect} from 'react';
import { UseFormRegister } from 'react-hook-form';

interface CustomInputProps {
    name: string;
    placeholder: string;
    register: UseFormRegister<{name: string}>;
    errors: object;
    validateOptions: object;
}

const CustomInput: FC = ({name, placeholder, register, errors, validateOptions}: CustomInputProps): JSX.Element => {
    return (
        <input
            {...register(name, { required: `Field ${name} is required`, ...validateOptions })}
            className={`custom-input ${errors?.[name] !== undefined ? 'input-error' : ''}`}
            placeholder={placeholder}
        />
    );
};

export default CustomInput;