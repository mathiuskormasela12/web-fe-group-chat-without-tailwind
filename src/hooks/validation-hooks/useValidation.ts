// ========== Validation Hooks
// import all packages
import { useForm, type FieldValues } from 'react-hook-form'
import { type ObjectSchema } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// import types
import { type UseValidation } from './useValidation.types'

export const useValidation: UseValidation = <T extends FieldValues>(schema: ObjectSchema<T>) => {
  const { handleSubmit, control, formState: { errors } } = useForm<T>({
    resolver: yupResolver(schema)
  })

  return [
    handleSubmit,
    control,
    errors
  ]
}
