import { forwardRef } from 'react';
import styles from './Form.module.css';

type FormInputProps = {
  id: string;
  name: string;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'url';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
};

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ id, name, label, type = 'text', value, onChange, required = false, placeholder }, ref) => {
    return (
      <div className={styles.formGroup}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <input
          ref={ref}
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={styles.input}
          required={required}
          placeholder={placeholder}
        />
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';

export default FormInput;



