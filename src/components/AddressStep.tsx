import { useFormContext } from "../context/FormContext";
import Field from "./Field";

export default function AddressStep() {
  const { state, dispatch } = useFormContext();
  const { address } = state.data;

  const update = (field: keyof typeof address, value: string) =>
    dispatch({ type: "UPDATE_FIELD", payload: { field, value } });

  return (
    <section>
      <div className="mb-6">
        <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
          Step 02 - Location
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          className="sm:col-span-2"
          label="Street address"
          name="street"
          placeholder="House number and street name"
          autoComplete="address-line1"
          required
          value={address.street}
          error={state.errors.street}
          onChange={(e) => update("street", e.target.value)}
        />
        <Field
          className="sm:col-span-2"
          label="Apartment, suite, etc."
          name="apartment"
          placeholder="Apartment, floor, unit (optional)"
          autoComplete="address-line2"
          value={address.apartment}
          error={state.errors.apartment}
          onChange={(e) => update("apartment", e.target.value)}
        />
        <Field
          label="City"
          name="city"
          placeholder="Your city"
          autoComplete="address-level2"
          required
          value={address.city}
          error={state.errors.city}
          onChange={(e) => update("city", e.target.value)}
        />
        <Field
          label="State / region"
          name="state"
          placeholder="Your state"
          autoComplete="address-level1"
          required
          value={address.state}
          error={state.errors.state}
          onChange={(e) => update("state", e.target.value)}
        />
        <Field
          label="Postal code"
          name="postalCode"
          placeholder="Postal / ZIP code"
          autoComplete="postal-code"
          required
          value={address.postalCode}
          error={state.errors.postalCode}
          onChange={(e) => update("postalCode", e.target.value)}
        />
        <Field
          label="Country"
          name="country"
          placeholder="Your country"
          autoComplete="country-name"
          required
          value={address.country}
          error={state.errors.country}
          onChange={(e) => update("country", e.target.value)}
        />
      </div>
    </section>
  );
}
