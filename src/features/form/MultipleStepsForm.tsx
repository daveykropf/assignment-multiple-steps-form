import { useState } from 'react'

import { useAppForm } from '../../hooks/form'
import { multiStepFormOpts } from './shared-form'
import { StepPersonal } from './steps/StepPersonal'
import { StepBasicInsurance } from './steps/StepBasicInsurance'
import { StepAdditional } from './steps/StepAdditional'
import { StepThankYou } from './steps/StepThankYou'
import { Button } from '../buildingBlocks/Button'

type Step = 1 | 2 | 3 | 4

export function MultipleStepsForm() {
  const [step, setStep] = useState<Step>(1)

  const form = useAppForm({
    ...multiStepFormOpts,
    onSubmit: async ({ value }) => {
      console.log(value)
      setStep(4)
    },
  })

  return (
    <form onSubmit={handleOnSubmit}>
      {step === 1 && <StepPersonal form={form} />}
      {step === 2 && <StepBasicInsurance form={form} />}
      {step === 3 && <StepAdditional form={form} />}
      {step === 4 && <StepThankYou />}

      {step < 4 && (
        <div>
          {step > 1 && <Button label="Vorige" onClick={() => setStep((prevValue) => (prevValue - 1) as Step)} />}
          {step < 3 && <Button label="Volgende" onClick={() => setStep((prevValue) => (prevValue + 1) as Step)} />}
          {step === 3 && <Button label="Verzenden" type="submit" />}
        </div>
      )}
    </form>
  )

  function handleOnSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    e.stopPropagation()
    form.handleSubmit()
  }
}
