import { forwardRef } from 'react';
import styles from './Form.module.css';

type FormTextareaProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  placeholder?: string;
  rows?: number;
};

const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ id, name, label, value, onChange, required = false, placeholder, rows = 6 }, ref) => {
    return (
      <div className={styles.formGroup}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <textarea
          ref={ref}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={styles.textarea}
          required={required}
          placeholder={placeholder}
          rows={rows}
        />
      </div>
    );
  }
);

FormTextarea.displayName = 'FormTextarea';

export default FormTextarea;

