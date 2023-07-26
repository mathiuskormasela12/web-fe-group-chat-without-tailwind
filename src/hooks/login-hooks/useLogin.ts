// ======== Create Account Hooks
// import all packages

import { type SubmitHandler } from 'react-hook-form'
import loginSchema from '../../pages/login/login.validation'
import { useValidation } from '../validation-hooks/useValidation'
import { type UseLogin, type ILogin } from './useLogin.types'

export const useLogin: UseLogin = () => {
  const [handleSubmit, control, errors] = useValidation<ILogin>(loginSchema)

  const isEmailError = errors.email?.message
  const isPasswordError = errors.password?.message

  const onSubmit: SubmitHandler<ILogin> = (data) => {
    console.log(data)
  }

  return {
    handleSubmit,
    control,
    isEmailError,
    isPasswordError,
    onSubmit
  }
}
