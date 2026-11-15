# Multi-Step Form Wizard

A responsive React + TypeScript multi-step form built to demonstrate:

- `useReducer` for predictable form state and navigation.
- `useContext` for sharing the form state and dispatch function across components.
- Yup for step-by-step validation.
- Tailwind CSS for responsive styling.

## Requirements

- Node.js 18.18+ (Node.js 20+ recommended)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Form flow

1. **Personal information** — first name, last name, email, phone and date of birth.
2. **Address** — street, apartment (optional), city, state/region, postal code and country.
3. **Review** — review all entered details and submit.

The form is frontend-only. Submission is simulated in the browser and displays a confirmation screen; no API, Express server or database is required.

## State management

- `src/reducers/formReducer.ts` contains the reducer and its action types.
- `src/context/FormContext.tsx` creates the context and provider using `useReducer`.
- Components use `useFormContext()` to read state and dispatch actions.
- `NEXT_STEP`, `PREVIOUS_STEP`, `UPDATE_FIELD`, `SET_ERRORS`, `CLEAR_ERRORS`, `SUBMIT_FORM` and `RESET_FORM` are implemented.

## Validation

Yup schemas are in `src/validation/formSchemas.ts`. Each step is validated before moving forward. The review screen can navigate back to either data-entry step.

## Project structure

```text
src/
├── components/
│   ├── AddressStep.tsx
│   ├── Field.tsx
│   ├── FormLayout.tsx
│   ├── PersonalInfoStep.tsx
│   ├── ProgressSteps.tsx
│   ├── ReviewStep.tsx
│   └── SuccessScreen.tsx
├── context/
│   └── FormContext.tsx
├── reducers/
│   └── formReducer.ts
├── types/
│   └── form.types.ts
├── validation/
│   └── formSchemas.ts
├── pages/
│   └── FormWizard.tsx
├── App.tsx
├── index.css
└── main.tsx
```
