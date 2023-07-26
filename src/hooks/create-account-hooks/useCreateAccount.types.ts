// ========== Create Account Hooks Types
import { type SubmitHandler, type Control, type UseFormHandleSubmit } from 'react-hook-form'

export interface ICreateAccount {
  name: string
  email: string
  password: string
  repeatPassword: string
}

export type UseCreateAccount = () => ({
  handleSubmit: UseFormHandleSubmit<ICreateAccount, undefined>
  control: Control<ICreateAccount, any>
  isNameError: string | undefined
  isEmailError: string | undefined
  isPasswordError: string | undefined
  isRepeatPassword: string | undefined
  onSubmit: SubmitHandler<ICreateAccount>
})
