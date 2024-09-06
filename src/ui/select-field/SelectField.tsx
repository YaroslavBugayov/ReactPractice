import './SelectField.scss';
import { FC, JSX } from 'react';

export interface OptionType { value: string; name: string; }

interface InputFieldProps {
    label: string;
    placeholder: string;
    name: string;
    description?: string;
    error?: string;
    options: OptionType[];
}

const SelectField: FC = ({ label, placeholder, name, description, error, options }: InputFieldProps): JSX.Element => {

    return (
        <div className="select-field">
            <label>{label}</label>
            <select required className="input" name={name}>
                <option value="" className="placeholder" defaultValue hidden>{placeholder}</option>
                {options?.map((option: OptionType, index: number) => (
                    <option key={index} value={option.value}>{option.name}</option>
                ))}
            </select>
        </div>
    );
};

export default SelectField;
