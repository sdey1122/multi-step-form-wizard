import {
  initialFormState,
  type FormAction,
  type FormState,
} from "../types/form.types";

export function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case "NEXT_STEP":
      return {
        ...state,
        currentStep: Math.min(state.currentStep + 1, 2),
        errors: {},
      };

    case "PREVIOUS_STEP":
      return {
        ...state,
        currentStep: Math.max(state.currentStep - 1, 0),
        errors: {},
      };

    case "UPDATE_FIELD": {
      const { field, value } = action.payload;
      const isPersonalField = [
        "firstName",
        "lastName",
        "email",
        "phone",
        "dateOfBirth",
      ].includes(field);

      const updatedData = isPersonalField
        ? {
            ...state.data,
            personal: {
              ...state.data.personal,
              [field as keyof typeof state.data.personal]: value,
            },
          }
        : {
            ...state.data,
            address: {
              ...state.data.address,
              [field as keyof typeof state.data.address]: value,
            },
          };

      return {
        ...state,
        data: updatedData,
        errors: {
          ...state.errors,
          [field]: undefined,
        },
      };
    }

    case "SET_ERRORS":
      return { ...state, errors: action.payload };

    case "CLEAR_ERRORS":
      return { ...state, errors: {} };

    case "SUBMIT_FORM":
      return { ...state, submitted: true, errors: {} };

    case "RESET_FORM":
      return initialFormState;

    default:
      return state;
  }
}
