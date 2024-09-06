import './CustomSelect.scss';
import { FC, JSX } from 'react';
import { UseFormRegister } from 'react-hook-form';

export interface OptionsType { value: string; name: string; }

interface CustomSelectProps {
    name: string;
    placeholder: string;
    register: UseFormRegister<{name: string}>;
    validateOptions: object;
    selectOptions: OptionsType[];
}

const CustomSelect: FC = ({ name, placeholder, register, validateOptions, selectOptions}: CustomSelectProps): JSX.Element => {

    return (
        <select {...register(name)} required className="custom-select" name={name}>
            <option value="" className="placeholder" defaultValue hidden>{placeholder}</option>
            {selectOptions?.map((option: OptionType, index: number) => (
                <option key={index} value={option.value}>{option.name}</option>
            ))}
        </select>
    );
};

export default CustomSelect;
