import { FormProvider } from "./context/FormContext";
import FormWizard from "./pages/FormWizard";

export default function App() {
  return (
    <FormProvider>
      <FormWizard />
    </FormProvider>
  );
}
