import { withForm } from '../../../hooks/form'
import { multiStepFormOpts } from '../shared-form'
import { FormNavigation } from '../../buildingBlocks/FormNavigation'

export const StepAdditional = withForm({
  ...multiStepFormOpts,
  props: {
    setStep: (_step: number) => {},
  },
  render: function Render({ form, setStep }) {
    return (
      <div>
        <h2>Aanvullende verzekeringen</h2>

        <FormNavigation
          onPrevious={() => setStep(2)}
          onSubmit={() => form.handleSubmit()}
        />
      </div>
    )
  },
})
