// ========== Login Hooks Types
import { type SubmitHandler, type Control, type UseFormHandleSubmit } from 'react-hook-form'

export interface ILogin {
  email: string
  password: string
}

export type UseLogin = () => ({
  handleSubmit: UseFormHandleSubmit<ILogin, undefined>
  control: Control<ILogin, any>
  isEmailError: string | undefined
  isPasswordError: string | undefined
  onSubmit: SubmitHandler<ILogin>
})
