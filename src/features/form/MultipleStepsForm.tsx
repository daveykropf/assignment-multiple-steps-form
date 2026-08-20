import { useForm } from '@tanstack/react-form'

const defaultValues = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  email: '',
  address: '',
}

export function MultipleStepsForm() {
  const form = useForm({
    defaultValues,
    onSubmit: async ({ value }) => {
      console.log(value)
    },
  })

  return (
    <form onSubmit={handleOnSubmit}>
      <button type="submit">Verzenden</button>
    </form>
  )

  function handleOnSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    e.stopPropagation()
    form.handleSubmit()
  }
}
