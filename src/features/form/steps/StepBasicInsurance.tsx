import { withForm } from '../../../hooks/form'
import { multiStepFormOpts, basicInsuranceSelectionSchema } from '../shared-form'
import { useInsuranceData } from '../../../hooks/useInsuranceData'
import { FormNavigation } from '../../buildingBlocks/FormNavigation'
import { Loader } from '../../buildingBlocks/Loader'
import { ErrorMessage } from '../../buildingBlocks/ErrorMessage'

export const StepBasicInsurance = withForm({
  ...multiStepFormOpts,
  props: {
    setStep: (_step: number) => {},
  },
  render: function Render({ form, setStep }) {
    const { basicInsuranceOptions, isLoading, error } = useInsuranceData()

    if (isLoading) return <Loader />
    if (error) return <ErrorMessage message="Er is wat misgegaan bij het ophalen van de verzekeringen. Probeer het later opnieuw." />

    return (
      <form.FormGroup
        name="basicInsurance"
        validators={{
          onDynamic: basicInsuranceSelectionSchema,
        }}
        onGroupSubmit={() => {
          setStep(3)
        }}
      >
        {(formGroup) => (
          <>
            <h2>Basisverzekering</h2>

            <form.AppField name="basicInsurance.selectedPlanId">
              {(field) => (
                <field.FormFieldRadioGroup
                  legend="Kies een basisverzekering"
                  options={basicInsuranceOptions}
                />
              )}
            </form.AppField>

            <FormNavigation
              onPrevious={() => setStep(1)}
              onNext={() => formGroup.handleSubmit()}
            />
          </>
        )}
      </form.FormGroup>
    )
  },
})
