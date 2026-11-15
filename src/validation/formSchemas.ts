import * as yup from "yup";

export const personalInfoSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .required("First name is required")
    .max(50, "Use 50 characters or fewer"),
  lastName: yup
    .string()
    .trim()
    .required("Last name is required")
    .max(50, "Use 50 characters or fewer"),
  email: yup
    .string()
    .trim()
    .email("Enter a valid email address")
    .required("Email is required"),
  phone: yup
    .string()
    .trim()
    .required("Phone number is required")
    .matches(/^[+]?[\d\s()-]{7,20}$/, "Enter a valid phone number"),
  dateOfBirth: yup
    .string()
    .required("Date of birth is required")
    .test(
      "not-future",
      "Date of birth cannot be in the future",
      (value) => !value || new Date(value) <= new Date(),
    ),
});

export const addressSchema = yup.object({
  street: yup
    .string()
    .trim()
    .required("Street address is required")
    .max(120, "Use 120 characters or fewer"),
  apartment: yup
    .string()
    .trim()
    .max(80, "Use 80 characters or fewer")
    .defined(),
  city: yup
    .string()
    .trim()
    .required("City is required")
    .max(60, "Use 60 characters or fewer"),
  state: yup
    .string()
    .trim()
    .required("State / region is required")
    .max(60, "Use 60 characters or fewer"),
  postalCode: yup
    .string()
    .trim()
    .required("Postal code is required")
    .max(15, "Use 15 characters or fewer"),
  country: yup.string().trim().required("Country is required"),
});

export async function validateStep(
  step: number,
  values: object,
): Promise<Record<string, string>> {
  const schema = step === 0 ? personalInfoSchema : addressSchema;

  try {
    await schema.validate(values, { abortEarly: false });
    return {};
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return error.inner.reduce<Record<string, string>>((errors, issue) => {
        if (issue.path && !errors[issue.path])
          errors[issue.path] = issue.message;
        return errors;
      }, {});
    }
    throw error;
  }
}
