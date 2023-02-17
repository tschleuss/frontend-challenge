import * as yup from "yup";

export const formSchema = yup.object({
  color: yup.string().required(),
  terms: yup
    .boolean()
    .required()
    .oneOf([true], "The terms and conditions must be accepted."),
});
