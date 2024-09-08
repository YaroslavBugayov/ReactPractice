import './CustomInput.scss';
import {FC, JSX, useEffect} from 'react';
import {FieldValues, RegisterOptions, UseFormRegister} from 'react-hook-form';

interface CustomInputProps {
    name: string;
    placeholder: string;
    register: UseFormRegister<FieldValues>;
    errors: object;
    validateOptions?: RegisterOptions;
}

const CustomInput: FC = ({name, placeholder, register, errors, validateOptions}: CustomInputProps): JSX.Element => {
    return (
        <input
            {...register(name, { required: `Поле ${name} пусте`, ...validateOptions })}
            className={`custom-input ${errors?.[name] !== undefined ? 'input-error' : ''}`}
            placeholder={placeholder}
        />
    );
};

export default CustomInput;