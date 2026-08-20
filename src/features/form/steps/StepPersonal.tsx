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
      </div>
    )
  },
})
