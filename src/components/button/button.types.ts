// ========== Button Types
// import all packages
import type React from 'react'

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'danger'
}
