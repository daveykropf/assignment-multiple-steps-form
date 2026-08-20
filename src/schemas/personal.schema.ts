import { z } from 'zod'

export const personalSchema = z.object({
  firstName: z.string().min(1, 'Voornaam is verplicht'),
  lastName: z.string().min(1, 'Achternaam is verplicht'),
  dateOfBirth: z
    .string()
    .min(1, 'Geboortedatum is verplicht')
    .refine((value) => !Number.isNaN(Date.parse(value)), {
      message: 'Ongeldige datum',
    })
    .refine((value) => new Date(value) <= new Date(), {
      message: 'Geboortedatum kan niet in de toekomst liggen',
    }),
  email: z.email('Ongeldig e-mailadres').min(1, 'E-mailadres is verplicht'),
  address: z.string().min(1, 'Adres is verplicht'),
})

export type PersonalInfo = z.infer<typeof personalSchema>
