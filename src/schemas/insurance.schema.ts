import { z } from 'zod'

export const insurancePlanSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  description: z.string(),
})

export type InsurancePlan = z.infer<typeof insurancePlanSchema>

export const insuranceDataSchema = z.object({
  basicInsurance: z.array(insurancePlanSchema),
  additionalInsurance: z.array(insurancePlanSchema),
})

export type InsuranceData = z.infer<typeof insuranceDataSchema>

export const basicInsuranceSelectionSchema = z.object({
  selectedPlanId: z.string().min(1, 'Kies een basisverzekering'),
})
