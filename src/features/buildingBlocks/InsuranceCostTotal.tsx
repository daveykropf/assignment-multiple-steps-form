import type { z } from 'zod'
import type { basicInsuranceSelectionSchema, additionalInsuranceSelectionSchema } from '../../schemas/insurance.schema'
import { useInsuranceData } from '../../hooks/useInsuranceData'

type InsuranceCostTotalProps =
  z.infer<typeof basicInsuranceSelectionSchema> &
  z.infer<typeof additionalInsuranceSelectionSchema>

export function InsuranceCostTotal({ selectedPlanId, selectedPlanIds }: InsuranceCostTotalProps) {
  const { data } = useInsuranceData()

  const basicPrice = data?.basicInsurance.find((p) => p.id === selectedPlanId)?.price ?? 0
  const addonsPrice = (data?.additionalInsurance ?? [])
    .filter((p) => selectedPlanIds.includes(p.id))
    .reduce((sum, p) => sum + p.price, 0)

  return (
    <p>
      <strong>Totale maandelijkse premie: €{(basicPrice + addonsPrice).toFixed(2)}</strong>
    </p>
  )
}
