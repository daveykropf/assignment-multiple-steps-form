import { useQuery } from '@tanstack/react-query'
import { insuranceDataSchema, type InsurancePlan } from '../schemas/insurance.schema'

export function useInsuranceData() {
  const query = useQuery({
    queryKey: ['insurance-data'],
    queryFn: async () => {
      const response = await fetch('/data.json')
      const data = await response.json()
      return insuranceDataSchema.parse(data)
    },
  })

  return {
    ...query,
    basicInsuranceOptions: toRadioOptions(query.data?.basicInsurance ?? []),
  }
}

function toRadioOptions(plans: InsurancePlan[]) {
  return plans.map((plan) => ({
    value: plan.id,
    label: `${plan.name} - €${plan.price.toFixed(2)} p/m`,
    description: plan.description,
  }))
}
