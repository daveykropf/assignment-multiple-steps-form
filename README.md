# Assignment multiple steps form

> Build using the Vite React TS template

## Development

1. `yarn install`
2. `yarn dev`
3. Open your browser at `http://localhost:8000`

## Build project

Using the command line `yarn build`

## Serving the application

Use the following command: `yarn preview`. Now you can visit the url `http://localhost:8000`

## Architectuurkeuzes en afwegingen

### Waarom Vite + TanStack Form + Zod

Vite gebruik ik al een paar jaar voor eigen projecten. Je kan vrij snel beginnen zonder al te veel configuratie. Bij Kaliber wordt `@tanstack/react-query` al jaren gebruikt en is er een eigen library genaamd `@kaliber/forms` die wordt gebruikt voor formulieren. `@tanstack/react-form` leek er qua API op en wilde ik graag uitproberen voor deze opdracht. Voordat ik met de opdracht begon wel ingelezen en wat examples bekeken, maar merkte al vrij snel bij het maken van deze opdracht dat formulieren met meerdere stappen toch iets meer werk nodig heeft. Daarom ging het voor mijn gevoel in het begin beetje rommelig en heb ik ook gebruik gemaakt van snippets uit de officiële docs en examples om mij meer tijd te geven voor de rest. Zod wordt sinds kort bij Kaliber gebruikt en sluit hier goed op aan omdat je met één schema zowel validatie als TypeScript types hebt.

### Keuzes

TanStack Form v1 heeft 12 type parameters, wat het al snel onoverzichtelijk maakt. Via het `createFormHook` / `withForm` pattern uit het officiële multi-step wizard example hoef je die niet overal handmatig door te geven.

Per stap valideer ik met `FormGroup` en een Zod schema, zodat niet het hele formulier gevalideerd wordt als je op "Volgende" klikt. Diezelfde schemas gebruik ik ook als TypeScript types via `z.infer`, en met `satisfies` op de default values weet ik zeker dat die in sync blijven.

Voor het overzicht met de totale maandelijkse premie had ik eerst `getFieldValue` geprobeerd, maar dat triggert geen re-renders. `form.Subscribe` met een selector doet dat wel.

Radio buttons en checkboxes heb ik gezien de tijd visueel heel simpel en hetzelfde gehouden dus die delen een `SelectGroupItem` component. Het enige verschil is het `type` prop.

De verzekeringdata haal ik op met `@tanstack/react-query`. Dat cached automatisch, dus bij stap-navigatie geen dubbele requests.

De Vite starter kit heb ik grotendeels intact gelaten. De kleuren heb ik deels overgenomen van het huidige platform. Qua accessibility heb ik gelet op aria-attributen bij errors, semantische HTML (`fieldset`/`legend`) en zichtbare focus states.

### Met meer tijd

Er zijn een paar dingen die ik met meer tijd anders had gedaan of nog had willen toevoegen.

Een step indicator, zodat je ziet waar je bent en hoeveel stappen er nog komen in het formulier. Validatie zit nu alleen op de knop, maar liever had ik dat ook per veld gedaan (on blur) zodat je direct feedback krijgt.

De mappenstructuur had ik ook kritischer naar willen kijken. Nu staat alles in `features/buildingBlocks`, maar niet alles is generiek herbruikbaar. Formulier-specifieke componenten zoals `FormField` en `FormNavigation` passen beter in `features/form`. Generieke dingen zoals `Loader` en `ErrorMessage` horen juist wel in `buildingBlocks`. Merkte dat ik tijdens het bouwen niet meer echt bewust bezig was met de structuur omdat ik progressie wilde boeken.

Qua accessibility kan het ook beter. Heb bijvoorbeeld op het einde nog wel asteriks bij de labels toegevoegd zodat je visueel ziet dat velden verplicht zijn, maar eigenlijk had ik dat moeten oplossen door een `required` property toe te voegen aan de FormFields zodat de asterik automatisch wordt toegevoegd aan het label maar ook dat er een `aria-required` wordt toegevoegd aan het veld.

Tot slot had ik stiekem graag nog wat motion willen toevoegen, overgangen tussen stappen en feedback bij interactie. Nu is het vrij statisch.

## Referenties

- [TanStack Form: Multi-step wizard example](https://tanstack.com/form/latest/docs/framework/react/examples/multi-step-wizard)
- [TanStack Form: Form Groups](https://tanstack.com/form/latest/docs/framework/react/guides/form-groups)
- [TanStack Form: Form Composition](https://tanstack.com/form/latest/docs/framework/react/guides/form-composition)
- [Zod: Schema validation](https://zod.dev/)
