import { useFormContext } from "../context/FormContext";
import Field from "./Field";

export default function PersonalInfoStep() {
  const { state, dispatch } = useFormContext();
  const { personal } = state.data;

  const update = (field: keyof typeof personal, value: string) =>
    dispatch({ type: "UPDATE_FIELD", payload: { field, value } });

  return (
    <section>
      <div className="mb-6">
        <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
          Step 01 - Personal details
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="First name"
          name="firstName"
          placeholder="e.g. Alex"
          autoComplete="given-name"
          required
          value={personal.firstName}
          error={state.errors.firstName}
          onChange={(e) => update("firstName", e.target.value)}
        />
        <Field
          label="Last name"
          name="lastName"
          placeholder="e.g. Morgan"
          autoComplete="family-name"
          required
          value={personal.lastName}
          error={state.errors.lastName}
          onChange={(e) => update("lastName", e.target.value)}
        />
        <Field
          className="sm:col-span-2"
          label="Email address"
          name="email"
          type="email"
          placeholder="alex@example.com"
          autoComplete="email"
          required
          value={personal.email}
          error={state.errors.email}
          onChange={(e) => update("email", e.target.value)}
        />
        <Field
          label="Phone number"
          name="phone"
          type="tel"
          placeholder="+91 98765 43210"
          autoComplete="tel"
          required
          value={personal.phone}
          error={state.errors.phone}
          onChange={(e) => update("phone", e.target.value)}
        />
        <Field
          label="Date of birth"
          name="dateOfBirth"
          type="date"
          autoComplete="bday"
          required
          value={personal.dateOfBirth}
          error={state.errors.dateOfBirth}
          onChange={(e) => update("dateOfBirth", e.target.value)}
        />
      </div>
    </section>
  );
}
