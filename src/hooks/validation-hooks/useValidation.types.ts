// ========= Validation Hooks Types
import { type FieldValues, type UseFormHandleSubmit, type Control, type FieldErrors } from 'react-hook-form'
import { type ObjectSchema } from 'yup'

export type UseValidation = <T extends FieldValues>(schema: ObjectSchema<T>) => [
  UseFormHandleSubmit<T, undefined>,
  Control<T, any>,
  FieldErrors<T>
]
