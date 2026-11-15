import {
  ArrowLeft,
  CheckCircle2,
  Edit2,
  MapPin,
  UserRound,
} from "lucide-react";
import { useFormContext } from "../context/FormContext";

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 border-b border-slate-100 py-3 last:border-0 sm:flex-row sm:items-start sm:justify-between">
      <span className="text-xs font-medium text-slate-400">{label}</span>
      <span className="break-words text-sm font-semibold text-slate-700 sm:max-w-[65%] sm:text-right">
        {value || "—"}
      </span>
    </div>
  );
}

export default function ReviewStep() {
  const { state, dispatch } = useFormContext();
  const { personal, address } = state.data;

  return (
    <section>
      <div className="mb-6">
        <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
          Step 03 - Final check
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Review your information
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Make sure everything looks right before submitting your form.
        </p>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
              <UserRound size={17} className="text-indigo-600" /> Personal
              information
            </div>
            <button
              type="button"
              onClick={() => dispatch({ type: "PREVIOUS_STEP" })}
              className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800"
            >
              <Edit2 size={13} /> Edit
            </button>
          </div>
          <ReviewRow
            label="Full name"
            value={`${personal.firstName} ${personal.lastName}`.trim()}
          />
          <ReviewRow label="Email" value={personal.email} />
          <ReviewRow label="Phone" value={personal.phone} />
          <ReviewRow label="Date of birth" value={personal.dateOfBirth} />
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
              <MapPin size={17} className="text-indigo-600" /> Address
            </div>
            <button
              type="button"
              onClick={() => dispatch({ type: "PREVIOUS_STEP" })}
              className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800"
            >
              <Edit2 size={13} /> Edit
            </button>
          </div>
          <ReviewRow label="Street" value={address.street} />
          <ReviewRow label="Apartment" value={address.apartment} />
          <ReviewRow label="City" value={address.city} />
          <ReviewRow label="State / region" value={address.state} />
          <ReviewRow label="Postal code" value={address.postalCode} />
          <ReviewRow label="Country" value={address.country} />
        </div>
      </div>

      <div className="mt-5 flex gap-3 rounded-xl bg-emerald-50 p-4 text-emerald-800">
        <CheckCircle2 size={19} className="mt-0.5 shrink-0" />
        <p className="text-xs leading-5">
          Your information is ready. Select{" "}
          <strong>Submit application</strong>{" "}
        </p>
      </div>
      <button
        type="button"
        onClick={() => dispatch({ type: "PREVIOUS_STEP" })}
        className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-800"
      >
        <ArrowLeft size={14} /> Back to address
      </button>
    </section>
  );
}
