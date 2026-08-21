import { useState } from 'react'

import { revalidateLogic } from '@tanstack/react-form'
import { useAppForm } from '../../hooks/form'
import { multiStepFormOpts } from './shared-form'
import { useInsuranceData } from '../../hooks/useInsuranceData'
import { StepPersonal } from './steps/StepPersonal'
import { StepBasicInsurance } from './steps/StepBasicInsurance'
import { StepAdditional } from './steps/StepAdditional'
import { StepThankYou } from './steps/StepThankYou'

type Step = 1 | 2 | 3 | 4

export function MultipleStepsForm() {
  const [step, setStep] = useState<Step>(1)
  const { data } = useInsuranceData()

  const form = useAppForm({
    ...multiStepFormOpts,
    validationLogic: revalidateLogic(),
    onSubmit: async ({ value }) => {
      const basicInsurance = data?.basicInsurance.find((p) => p.id === value.basicInsurance.selectedPlanId)
      const additionalInsurance = data?.additionalInsurance
        ?.filter((p) => value.additionalInsurance.selectedPlanIds.includes(p.id))

      const payload = {
        personal: value.personal,
        basicInsurance,
        additionalInsurance,
      }

      console.log(payload)
      setStep(4)
    },
  })

  return (
    <form onSubmit={handleOnSubmit}>
      {step === 1 && <StepPersonal setStep={(s) => setStep(s as Step)} {...{ form }} />}
      {step === 2 && <StepBasicInsurance setStep={(s) => setStep(s as Step)} {...{ form }} />}
      {step === 3 && <StepAdditional setStep={(s) => setStep(s as Step)} {...{ form }} />}
      {step === 4 && <StepThankYou />}
    </form>
  )

  function handleOnSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    e.stopPropagation()
    form.handleSubmit()
  }
}
