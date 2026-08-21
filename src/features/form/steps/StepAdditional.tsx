import { withForm } from '../../../hooks/form'
import { multiStepFormOpts } from '../shared-form'
import { useInsuranceData } from '../../../hooks/useInsuranceData'
import { InsuranceCostTotal } from '../../buildingBlocks/InsuranceCostTotal'
import { FormNavigation } from '../../buildingBlocks/FormNavigation'
import { Loader } from '../../buildingBlocks/Loader'
import { ErrorMessage } from '../../buildingBlocks/ErrorMessage'

export const StepAdditional = withForm({
  ...multiStepFormOpts,
  props: {
    setStep: (_step: number) => {},
  },
  render: function Render({ form, setStep }) {
    const { additionalInsuranceOptions, isLoading, error } = useInsuranceData()

    if (isLoading) return <Loader />
    if (error) return <ErrorMessage message="Er is wat misgegaan bij het ophalen van de verzekeringen." />

    return (
      <div>
        <h2>Aanvullende verzekeringen</h2>

        <form.AppField name="additionalInsurance.selectedPlanIds">
          {(field) => (
            <field.FormFieldCheckboxGroup
              legend="Kies eventuele aanvullende verzekeringen"
              options={additionalInsuranceOptions}
            />
          )}
        </form.AppField>

        <form.Subscribe selector={(state) => ({
          selectedPlanId: state.values.basicInsurance.selectedPlanId,
          selectedPlanIds: state.values.additionalInsurance.selectedPlanIds,
        })}>
          {({ selectedPlanId, selectedPlanIds }) => (
            <InsuranceCostTotal {...{ selectedPlanId, selectedPlanIds }} />
          )}
        </form.Subscribe>

        <FormNavigation
          onPrevious={() => setStep(2)}
          onSubmit={() => form.handleSubmit()}
        />
      </div>
    )
  },
})
