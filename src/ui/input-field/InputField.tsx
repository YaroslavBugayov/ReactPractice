import './InputField.scss';
import { FC, JSX } from 'react';

interface InputFieldProps {
    label: string;
    placeholder: string;
    name: string;
    description?: string;
    error?: string;
}

const InputField: FC = ({ label, placeholder, name, description, error }: InputFieldProps): JSX.Element => {

    return (
        <div className="input-field">
            <label>{label}</label>
            <input className="input" name={name} placeholder={placeholder}/>
        </div>
    );
};

export default InputField;
