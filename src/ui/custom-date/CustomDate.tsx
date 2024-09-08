import './CustomDate.scss';
import { UseFormRegister } from 'react-hook-form';
import { FC, JSX, useState } from 'react';

interface CustomInputProps {
    name: string;
    placeholder: string;
    register: UseFormRegister<{name: string}>;
    errors: object;
    validateOptions: object;
}

const CustomDate: FC = ({name, placeholder, register, errors, validateOptions}: CustomInputProps): JSX.Element => {
    const [type, setType] = useState<'text' | 'date'>('text');

    const handleFocus = (): void => setType('date');
    const handleBlur = (): void => setType('text');

    return (
        <input
            {...register(name, { required: `Field ${name} is required`, ...validateOptions })}
            className={`custom-date ${errors?.[name] !== undefined ? 'input-error' : ''}`}
            placeholder={placeholder}
            type={type}
            onFocus={handleFocus}
            onBlur={handleBlur}
        />
    );
};

export default CustomDate;