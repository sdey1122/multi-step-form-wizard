import { Check } from "lucide-react";

const steps = [
  { title: "Personal info", subtitle: "About you" },
  { title: "Address", subtitle: "Where to find you" },
  { title: "Review", subtitle: "Confirm details" },
];

interface ProgressStepsProps {
  currentStep: number;
}

export default function ProgressSteps({ currentStep }: ProgressStepsProps) {
  return (
    <div className="mb-9">
      <div className="flex items-center">
        {steps.map((step, index) => {
          const complete = index < currentStep;
          const active = index === currentStep;

          return (
            <div
              key={step.title}
              className={`flex items-center ${index < steps.length - 1 ? "flex-1" : ""}`}
            >
              <div className="flex min-w-0 flex-col items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold transition ${
                    complete
                      ? "border-indigo-600 bg-indigo-600 text-white"
                      : active
                        ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                        : "border-slate-200 bg-white text-slate-400"
                  }`}
                >
                  {complete ? <Check size={18} /> : index + 1}
                </div>
                <div className="mt-2 text-center">
                  <p
                    className={`whitespace-nowrap text-xs font-semibold sm:text-sm ${active || complete ? "text-slate-800" : "text-slate-400"}`}
                  >
                    {step.title}
                  </p>
                  <p className="mt-0.5 hidden text-[11px] text-slate-400 sm:block">
                    {step.subtitle}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`mx-2 mb-7 h-0.5 flex-1 sm:mx-4 ${index < currentStep ? "bg-indigo-600" : "bg-slate-200"}`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
