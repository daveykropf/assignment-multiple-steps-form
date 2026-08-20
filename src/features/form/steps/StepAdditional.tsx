import { withForm } from '../../../hooks/form'
import { multiStepFormOpts } from '../shared-form'

export const StepAdditional = withForm({
  ...multiStepFormOpts,
  render: function Render({ form }) {
    return (
      <div>
        <h2>Aanvullende verzekeringen</h2>
      </div>
    )
  },
})
