// ======== Create Account Hooks
// import all packages

import { type SubmitHandler } from 'react-hook-form'
import createAccountSchema from '../../pages/create-account/createAccount.validation'
import { useValidation } from '../validation-hooks/useValidation'
import { type UseCreateAccount, type ICreateAccount } from './useCreateAccount.types'

export const useCreateAccount: UseCreateAccount = () => {
  const [handleSubmit, control, errors] = useValidation<ICreateAccount>(createAccountSchema)

  const isNameError = errors.name?.message
  const isEmailError = errors.email?.message
  const isPasswordError = errors.password?.message
  const isRepeatPassword = errors.repeatPassword?.message

  const onSubmit: SubmitHandler<ICreateAccount> = (data) => {
    console.log(data)
  }

  return {
    handleSubmit,
    control,
    isNameError,
    isEmailError,
    isPasswordError,
    isRepeatPassword,
    onSubmit
  }
}
