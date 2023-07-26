// ========== Button
// import all packages
import React from 'react'
import { type IButtonProps } from './button.types'
import * as Styled from './button.styles'

export const Button: React.FC<IButtonProps> = (props) => {
  const { variant, ...rest } = props

  switch (variant) {
    case 'primary' : {
      return (
        <Styled.ButtonPrimary {...rest}>
          {rest.children}
        </Styled.ButtonPrimary>
      )
    }

    default : {
      return (
        <Styled.ButtonDanger {...rest}>
          {rest.children}
        </Styled.ButtonDanger>
      )
    }
  }
}
