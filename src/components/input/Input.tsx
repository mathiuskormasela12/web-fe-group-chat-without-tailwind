// ========= Input
// import all packages
import React from 'react'
import * as Styled from './input.styles'
import { type IInputProps } from './input.types'

export const Input: React.FC<IInputProps> = (props) => {
  const { errorMessage = '', ...rest } = props

  const isError: boolean = (errorMessage.length > 0)

  return (
   <Styled.InputWrapper $isError={isError}>
     <Styled.Input {...rest} />
     {(isError) && (
      <Styled.Error>
        {errorMessage}
      </Styled.Error>
     )}
   </Styled.InputWrapper>
  )
}
