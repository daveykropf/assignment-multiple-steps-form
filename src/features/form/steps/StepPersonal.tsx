import { withForm } from '../../../hooks/form'
import { multiStepFormOpts } from '../shared-form'

export const StepPersonal = withForm({
  ...multiStepFormOpts,
  render: function Render({ form }) {
    return (
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
      </div>
    )
  },
})
