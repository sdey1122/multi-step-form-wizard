import { Check, RotateCcw } from "lucide-react";
import { useFormContext } from "../context/FormContext";

export default function SuccessScreen() {
  const { state, dispatch } = useFormContext();

  return (
    <div className="mx-auto max-w-lg py-10 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
        <Check size={30} strokeWidth={2.5} />
      </div>
      <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
        Submission complete
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
        You’re all set, {state.data.personal.firstName}!
      </h2>
      <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500">
        Your form has been successfully completed
      </p>
      <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Submission summary
        </p>
        <p className="mt-2 text-sm font-semibold text-slate-800">
          {state.data.personal.firstName} {state.data.personal.lastName}
        </p>
        <p className="mt-1 text-sm text-slate-500">
          {state.data.personal.email}
        </p>
        <p className="mt-1 text-sm text-slate-500">
          {state.data.address.city}, {state.data.address.country}
        </p>
      </div>
      <button
        type="button"
        onClick={() => dispatch({ type: "RESET_FORM" })}
        className="primary-button mt-7"
      >
        <RotateCcw size={16} /> Start a new form
      </button>
    </div>
  );
}
