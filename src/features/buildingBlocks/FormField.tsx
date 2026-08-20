import { useFieldContext } from '../../hooks/form-context'

import styles from './FormField.module.css'

export function FormFieldText({ label }: { label: string }) {
  const field = useFieldContext<string>()
  const errors = hasErrors(field)

  return (
    <FormFieldBase label={label}>
      <input
        id={field.name}
        type="text"
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        aria-invalid={errors}
        aria-describedby={errors ? `${field.name}-error` : undefined}
      />
    </FormFieldBase>
  )
}

export function FormFieldEmail({ label }: { label: string }) {
  const field = useFieldContext<string>()
  const errors = hasErrors(field)

  return (
    <FormFieldBase label={label}>
      <input
        id={field.name}
        type="email"
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        aria-invalid={errors}
        aria-describedby={errors ? `${field.name}-error` : undefined}
      />
    </FormFieldBase>
  )
}

export function FormFieldDate({ label }: { label: string }) {
  const field = useFieldContext<string>()
  const errors = hasErrors(field)

  return (
    <FormFieldBase label={label}>
      <input
        id={field.name}
        type="date"
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        aria-invalid={errors}
        aria-describedby={errors ? `${field.name}-error` : undefined}
      />
    </FormFieldBase>
  )
}

function FormFieldBase({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  const field = useFieldContext<string>()
  const errors = hasErrors(field)

  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      {children}
      {errors && (
        <p className={styles.errorMessage} id={`${field.name}-error`} role="alert">
          {field.state.meta.errors[0]?.message ?? field.state.meta.errors[0]}
        </p>
      )}
    </div>
  )
}

function hasErrors(field: ReturnType<typeof useFieldContext<string>>) {
  return field.state.meta.errors.length > 0
}
