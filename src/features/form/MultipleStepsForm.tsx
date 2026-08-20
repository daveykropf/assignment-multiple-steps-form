import { useState } from 'react'

import { revalidateLogic } from '@tanstack/react-form'
import { useAppForm } from '../../hooks/form'
import { multiStepFormOpts } from './shared-form'
import { StepPersonal } from './steps/StepPersonal'
import { StepBasicInsurance } from './steps/StepBasicInsurance'
import { StepAdditional } from './steps/StepAdditional'
import { StepThankYou } from './steps/StepThankYou'

type Step = 1 | 2 | 3 | 4

export function MultipleStepsForm() {
  const [step, setStep] = useState<Step>(1)

  const form = useAppForm({
    ...multiStepFormOpts,
    validationLogic: revalidateLogic(),
    onSubmit: async ({ value }) => {
      console.log(value)
      setStep(4)
    },
  })

  return (
    <form onSubmit={handleOnSubmit}>
      {step === 1 && <StepPersonal form={form} setStep={(s) => setStep(s as Step)} />}
      {step === 2 && <StepBasicInsurance form={form} setStep={(s) => setStep(s as Step)} />}
      {step === 3 && <StepAdditional form={form} setStep={(s) => setStep(s as Step)} />}
      {step === 4 && <StepThankYou />}
    </form>
  )

  function handleOnSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    e.stopPropagation()
    form.handleSubmit()
  }
}
