export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
}

export interface AddressInfo {
  street: string;
  apartment: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface FormData {
  personal: PersonalInfo;
  address: AddressInfo;
}

export type FormField = keyof PersonalInfo | keyof AddressInfo;

export type FormErrors = Partial<Record<FormField, string>>;

export interface FormState {
  currentStep: number;
  data: FormData;
  errors: FormErrors;
  submitted: boolean;
}

export type FormAction =
  | { type: "NEXT_STEP" }
  | { type: "PREVIOUS_STEP" }
  | { type: "UPDATE_FIELD"; payload: { field: FormField; value: string } }
  | { type: "SET_ERRORS"; payload: FormErrors }
  | { type: "CLEAR_ERRORS" }
  | { type: "SUBMIT_FORM" }
  | { type: "RESET_FORM" };

export const initialFormData: FormData = {
  personal: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
  },
  address: {
    street: "",
    apartment: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  },
};

export const initialFormState: FormState = {
  currentStep: 0,
  data: initialFormData,
  errors: {},
  submitted: false,
};
