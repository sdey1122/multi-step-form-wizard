import type { InputHTMLAttributes } from "react";

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
}

export default function Field({
  label,
  error,
  hint,
  id,
  className = "",
  ...props
}: FieldProps) {
  const fieldId = id ?? props.name;

  return (
    <div className={className}>
      <label className="field-label" htmlFor={fieldId}>
        {label}
        {props.required && <span className="ml-1 text-rose-500">*</span>}
      </label>
      <input
        id={fieldId}
        className={`field-input ${error ? "border-rose-400 focus:border-rose-500 focus:ring-rose-100" : ""}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${fieldId}-error` : undefined}
        {...props}
      />
      {error ? (
        <p
          id={`${fieldId}-error`}
          className="mt-1.5 text-xs font-medium text-rose-600"
        >
          {error}
        </p>
      ) : hint ? (
        <p className="mt-1.5 text-xs text-slate-400">{hint}</p>
      ) : null}
    </div>
  );
}
