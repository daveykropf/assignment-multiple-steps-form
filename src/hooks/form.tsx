import { createFormHook } from '@tanstack/react-form'
import { FormFieldText } from '../features/buildingBlocks/FormField'
import { fieldContext, formContext } from './form-context'

export const { useAppForm, withForm } = createFormHook({
  fieldComponents: {
    FormFieldText,
  },
  formComponents: {},
  fieldContext,
  formContext,
})
