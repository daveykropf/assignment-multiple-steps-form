import { withForm } from '../../../hooks/form'
import { multiStepFormOpts } from '../shared-form'

export const StepBasicInsurance = withForm({
  ...multiStepFormOpts,
  render: function Render({ form }) {
    return (
      <div>
        <h2>Basisverzekering</h2>
      </div>
    )
  },
})
