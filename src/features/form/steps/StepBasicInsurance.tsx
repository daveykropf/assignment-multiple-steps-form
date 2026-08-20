import { withForm } from '../../../hooks/form'
import { multiStepFormOpts } from '../shared-form'
import { FormNavigation } from '../../buildingBlocks/FormNavigation'

export const StepBasicInsurance = withForm({
  ...multiStepFormOpts,
  props: {
    setStep: (_step: number) => {},
  },
  render: function Render({ form, setStep }) {
    return (
      <div>
        <h2>Basisverzekering</h2>

        <FormNavigation
          onPrevious={() => setStep(1)}
          onNext={() => setStep(3)}
        />
      </div>
    )
  },
})
