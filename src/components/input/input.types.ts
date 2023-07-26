// ========== Input Types
// import all packages
import type React from 'react'

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
}

export interface IInputWrapper {
  $isError: boolean
}
