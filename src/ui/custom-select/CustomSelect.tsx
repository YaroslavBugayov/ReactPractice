import './CustomSelect.scss';
import { FC, JSX } from 'react';
import {FieldValues, RegisterOptions, UseFormRegister} from 'react-hook-form';

export interface OptionsType { value: string; name: string; }

interface CustomSelectProps {
    name: string;
    placeholder: string;
    register: UseFormRegister<FieldValues>;
    validateOptions?: RegisterOptions;
    errors: object;
    selectOptions: OptionsType[];
}

const CustomSelect: FC = ({ name, placeholder, register, errors, validateOptions, selectOptions}: CustomSelectProps): JSX.Element => {

    return (
        <select
            {...register(name, { required: `Field ${name} is required`, ...validateOptions })}
            className={`custom-select ${errors?.[name] !== undefined ? 'input-error' : ''}`}
        >
            <option value="" className="placeholder" defaultValue hidden>{placeholder}</option>
            {selectOptions?.map((option: OptionsType, index: number) => (
                <option key={index} value={option.value}>{option.name}</option>
            ))}
        </select>
    );
};

export default CustomSelect;
