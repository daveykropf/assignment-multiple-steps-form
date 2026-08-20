import { useFieldContext } from '../../hooks/form-context'

export function FormFieldText({ label }: { label: string }) {
  const field = useFieldContext<string>()

  return (
    <FormFieldBase label={label}>
      <input
        id={field.name}
        type="text"
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
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

  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      {children}
      {field.state.meta.errors.length > 0 && (
        <p>{field.state.meta.errors[0]}</p>
      )}
    </div>
  )
}
