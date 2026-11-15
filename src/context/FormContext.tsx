import {
  createContext,
  useContext,
  useReducer,
  type Dispatch,
  type ReactNode,
} from "react";
import { formReducer } from "../reducers/formReducer";
import {
  initialFormState,
  type FormAction,
  type FormState,
} from "../types/form.types";

interface FormContextValue {
  state: FormState;
  dispatch: Dispatch<FormAction>;
}

const FormContext = createContext<FormContextValue | undefined>(undefined);

interface FormProviderProps {
  children: ReactNode;
}

export function FormProvider({ children }: FormProviderProps) {
  const [state, dispatch] = useReducer(formReducer, initialFormState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext(): FormContextValue {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("useFormContext must be used inside FormProvider");
  }

  return context;
}
