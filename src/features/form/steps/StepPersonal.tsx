import { withForm } from '../../../hooks/form'
import { multiStepFormOpts, personalSchema } from '../shared-form'
import { FormNavigation } from '../../buildingBlocks/FormNavigation'

export const StepPersonal = withForm({
  ...multiStepFormOpts,
  props: {
    setStep: (_step: number) => {},
  },
  render: function Render({ form, setStep }) {
    return (
      <form.FormGroup
        name="personal"
        validators={{
          onDynamic: personalSchema,
        }}
        onGroupSubmit={() => {
          setStep(2)
        }}
      >
        {(formGroup) => (
          <div>
            <h2>Persoonlijke gegevens</h2>

            <form.AppField name="personal.firstName">
              {(field) => <field.FormFieldText label="Voornaam" />}
            </form.AppField>

            <form.AppField name="personal.lastName">
              {(field) => <field.FormFieldText label="Achternaam" />}
            </form.AppField>

            <form.AppField name="personal.address">
              {(field) => <field.FormFieldText label="Adres" />}
            </form.AppField>

            <form.AppField name="personal.dateOfBirth">
              {(field) => <field.FormFieldDate label="Geboortedatum" />}
            </form.AppField>

            <form.AppField name="personal.email">
              {(field) => <field.FormFieldEmail label="E-mailadres" />}
            </form.AppField>

            <FormNavigation onNext={() => formGroup.handleSubmit()} />
          </div>
        )}
      </form.FormGroup>
    )
  },
})
