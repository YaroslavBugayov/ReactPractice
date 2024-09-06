import './CustomDate.scss';
import { UseFormRegister } from 'react-hook-form';
import { FC, JSX, useState } from 'react';

interface CustomInputProps {
    name: string;
    placeholder: string;
    register: UseFormRegister<{name: string}>;
    validateOptions: object;
}

const CustomDate: FC = ({name, placeholder, register, validateOptions}: CustomInputProps): JSX.Element => {
    const [type, setType] = useState<'text' | 'date'>('text');

    const handleFocus = (): void => setType('date');
    const handleBlur = (): void => setType('text');

    return (
        <input
            {...register(name, { required: true, ...validateOptions })}
            className="custom-date"
            placeholder={placeholder}
            type={type}
            onFocus={handleFocus}
            onBlur={handleBlur}
        />
    );
};

export default CustomDate;