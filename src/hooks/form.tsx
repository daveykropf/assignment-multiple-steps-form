import { createFormHook } from '@tanstack/react-form'
import { FormFieldText, FormFieldEmail, FormFieldDate, FormFieldRadioGroup, FormFieldCheckboxGroup } from '../features/buildingBlocks/FormField'
import { fieldContext, formContext } from './form-context'

export const { useAppForm, withForm } = createFormHook({
  fieldComponents: {
    FormFieldText,
    FormFieldEmail,
    FormFieldDate,
    FormFieldRadioGroup,
    FormFieldCheckboxGroup,
  },
  formComponents: {},
  fieldContext,
  formContext,
})
