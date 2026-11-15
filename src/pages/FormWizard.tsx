import { useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useFormContext } from "../context/FormContext";
import FormLayout from "../components/FormLayout";
import ProgressSteps from "../components/ProgressSteps";
import PersonalInfoStep from "../components/PersonalInfoStep";
import AddressStep from "../components/AddressStep";
import ReviewStep from "../components/ReviewStep";
import SuccessScreen from "../components/SuccessScreen";
import { validateStep } from "../validation/formSchemas";

function Wizard() {
  const { state, dispatch } = useFormContext();
  const [isValidating, setIsValidating] = useState(false);

  const handleNext = async () => {
    const values =
      state.currentStep === 0 ? state.data.personal : state.data.address;
    setIsValidating(true);
    try {
      const errors = await validateStep(state.currentStep, values);
      if (Object.keys(errors).length > 0) {
        dispatch({ type: "SET_ERRORS", payload: errors });
        return;
      }
      dispatch({ type: "CLEAR_ERRORS" });
      dispatch({ type: "NEXT_STEP" });
    } finally {
      setIsValidating(false);
    }
  };

  const handleSubmit = () => {
    dispatch({ type: "SUBMIT_FORM" });
  };

  if (state.submitted) {
    return (
      <FormLayout>
        <SuccessScreen />
      </FormLayout>
    );
  }

  return (
    <FormLayout>
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          Welcome - Complete your profile
        </p>
        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
          Complete the form below. Your progress and information are shared
          across each step using React Context and useReducer.
        </p>
      </div>

      <ProgressSteps currentStep={state.currentStep} />

      <div className="min-h-[360px]">
        {state.currentStep === 0 && <PersonalInfoStep />}
        {state.currentStep === 1 && <AddressStep />}
        {state.currentStep === 2 && <ReviewStep />}
      </div>

      <div className="mt-9 flex items-center justify-between pt-3">
        <button
          type="button"
          onClick={() => dispatch({ type: "PREVIOUS_STEP" })}
          disabled={state.currentStep === 0}
          className="secondary-button"
        >
          <ArrowLeft size={16} /> Back
        </button>

        {state.currentStep < 2 ? (
          <button
            type="button"
            onClick={handleNext}
            disabled={isValidating}
            className="primary-button"
          >
            {isValidating ? "Checking..." : "Continue"} <ArrowRight size={16} />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            className="primary-button"
          >
            Submit application <Check size={16} />
          </button>
        )}
      </div>
    </FormLayout>
  );
}

export default Wizard;
