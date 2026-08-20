import { formOptions } from '@tanstack/react-form'
import { personalSchema } from '../../schemas/personal.schema'
import { basicInsuranceSelectionSchema } from '../../schemas/insurance.schema'

export const multiStepFormOpts = formOptions({
  defaultValues: {
    personal: {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      email: '',
      address: '',
    },
    basicInsurance: {
      selectedPlanId: '',
    },
    additionalInsurance: {
      selectedPlanIds: [] as string[],
    },
  },
})

export { personalSchema, basicInsuranceSelectionSchema }
