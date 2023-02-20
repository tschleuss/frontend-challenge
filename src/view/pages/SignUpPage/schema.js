import * as yup from 'yup';

export const formSchema = yup.object({
  name: yup.string().trim().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});
