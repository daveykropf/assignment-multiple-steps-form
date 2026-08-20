import { formOptions } from '@tanstack/react-form'
import { personalSchema } from '../../schemas/personal.schema'

export const multiStepFormOpts = formOptions({
  defaultValues: {
    personal: {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      email: '',
      address: '',
    },
  },
})

export { personalSchema }
