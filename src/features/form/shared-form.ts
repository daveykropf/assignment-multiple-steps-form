import type { z } from 'zod'
import { formOptions } from '@tanstack/react-form'
import { personalSchema } from '../../schemas/personal.schema'
import { basicInsuranceSelectionSchema, additionalInsuranceSelectionSchema } from '../../schemas/insurance.schema'

type DefaultValues = {
  personal: z.infer<typeof personalSchema>
  basicInsurance: z.infer<typeof basicInsuranceSelectionSchema>
  additionalInsurance: z.infer<typeof additionalInsuranceSelectionSchema>
}

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
  } satisfies DefaultValues,
})

export { personalSchema, basicInsuranceSelectionSchema, additionalInsuranceSelectionSchema }
