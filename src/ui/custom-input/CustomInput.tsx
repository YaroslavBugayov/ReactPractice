import './CustomInput.scss';
import { FC, JSX } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface CustomInputProps {
    name: string;
    placeholder: string;
    register: UseFormRegister<{name: string}>;
    validateOptions: object;
}

const CustomInput: FC = ({name, placeholder, register, validateOptions}: CustomInputProps): JSX.Element => {
    return (
        <input
            {...register(name, { required: true, ...validateOptions })}
            className="custom-input"
            placeholder={placeholder}
        />
    );
};

export default CustomInput;