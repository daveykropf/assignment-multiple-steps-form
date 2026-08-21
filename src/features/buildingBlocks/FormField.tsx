import { useFieldContext } from '../../hooks/form-context'

import styles from './FormField.module.css'

type LabelProps = {
  label: string
}

type SelectOption = {
  value: string
  label: string
  description?: string
}

type SelectGroupProps = {
  legend: string
  options: SelectOption[]
}

type SelectGroupItemProps = {
  type: 'radio' | 'checkbox'
  option: SelectOption
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
        className={styles.input}
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
        className={styles.input}
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
        className={styles.input}
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

export function FormFieldCheckboxGroup({ legend, options }: SelectGroupProps) {
  const field = useFieldContext<string[]>()

  function handleChange(value: string) {
    const current = field.state.value
    const next = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value]
    field.handleChange(next)
  }

  return (
    <fieldset className={styles.selectGroup}>
      <legend>{legend}</legend>
      {options.map((option) => (
        <SelectGroupItem
          type="checkbox"
          key={option.value}
          name={field.name}
          checked={field.state.value.includes(option.value)}
          onChange={() => handleChange(option.value)}
          {...{ option }}
        />
      ))}
    </fieldset>
  )
}

export function FormFieldRadioGroup({ legend, options }: SelectGroupProps) {
  const field = useFieldContext<string>()
  const errors = hasErrors(field)

  return (
    <fieldset className={styles.selectGroup} aria-describedby={errors ? `${field.name}-error` : undefined}>
      <legend>{legend}</legend>
      {options.map((option) => (
        <SelectGroupItem
          key={option.value}
          type="radio"
          name={field.name}
          checked={field.state.value === option.value}
          onChange={() => field.handleChange(option.value)}
          {...{ option }}
        />
      ))}
      {hasErrors(field) && <FieldErrorMessage />}
    </fieldset>
  )
}

function SelectGroupItem({ type, option, name, checked, onChange }: SelectGroupItemProps) {
  return (
    <label className={styles.selectItem}>
      <input
        value={option.value}
        {...{ type, name, checked, onChange }}
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
    <div className={styles.base}>
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
