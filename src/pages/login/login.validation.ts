// ========== Create Account Validation
// import all packages
import * as yup from 'yup'

const createAccountSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email is required').email('Email is invalid'),
  password: yup.string().required('Password is required').min(5, 'Password is too short').matches(/[a-z]/, 'Password should include at least one lower-case, one upper-case word, one number & one symbol').matches(/[A-Z]/, 'Password should include at least one lower-case, one upper-case word, one number & one symbol').matches(/[0-9]/, 'Password should include at least one lower-case, one upper-case word, one number & one symbol').matches(/[\W]/, 'Password should include at least one lower-case, one upper-case word, one number & one symbol'),
  repeatPassword: yup.string().required('Repeat password is required').oneOf([yup.ref('password')], 'Password does not match')
})

export default createAccountSchema
