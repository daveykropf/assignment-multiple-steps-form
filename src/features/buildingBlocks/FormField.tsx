import { useFieldContext } from '../../hooks/form-context'

import styles from './FormField.module.css'

type LabelProps = {
  label: string
}

type RadioOption = {
  value: string
  label: string
  description?: string
}

type RadioGroupProps = {
  legend: string
  options: RadioOption[]
}

type RadioGroupItemProps = {
  option: RadioOption
  name: string
  checked: boolean
  onChange: () => void
}

export function FormFieldText({ label }: LabelProps) {
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

export function FormFieldEmail({ label }: LabelProps) {
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

export function FormFieldDate({ label }: LabelProps) {
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

export function FormFieldRadioGroup({ legend, options }: RadioGroupProps) {
  const field = useFieldContext<string>()
  const errors = hasErrors(field)

  return (
    <fieldset className={styles.radioGroup} aria-describedby={errors ? `${field.name}-error` : undefined}>
      <legend>{legend}</legend>
      {options.map((option) => (
        <FormFieldRadioGroupItem
          key={option.value}
          option={option}
          name={field.name}
          checked={field.state.value === option.value}
          onChange={() => field.handleChange(option.value)}
        />
      ))}
      {hasErrors(field) && <FieldErrorMessage />}
    </fieldset>
  )
}

function FormFieldRadioGroupItem({ option, name, checked, onChange }: RadioGroupItemProps) {
  return (
    <label className={styles.radioItem}>
      <input
        type="radio"
        value={option.value}
        {...{ name, checked, onChange }}
      />
      <span>
        {option.label}
        {option.description && <small> - {option.description}</small>}
      </span>
    </label>
  )
}

function FormFieldBase({ label, children }: LabelProps & { children: React.ReactNode }) {
  const field = useFieldContext<string>()

  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      {children}
      {hasErrors(field) && <FieldErrorMessage />}
    </div>
  )
}

function FieldErrorMessage() {
  const field = useFieldContext<string>()

  return (
    <p className={styles.errorMessage} id={`${field.name}-error`} role="alert">
      {field.state.meta.errors[0]?.message ?? field.state.meta.errors[0]}
    </p>
  )
}

function hasErrors(field: ReturnType<typeof useFieldContext<string>>) {
  return field.state.meta.errors.length > 0
}
