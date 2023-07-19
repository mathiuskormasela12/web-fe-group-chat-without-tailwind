// ========== Input Styles
// import all packages
import styled from 'styled-components'
import { Colors } from '../../themes'
import { type IInputWrapper } from './input.types'

export const InputWrapper = styled.div<IInputWrapper>`
  & input {
    border: 1px solid ${(props) => props.$isError ? Colors.danger : 'transparent'};
  }
`

export const Input = styled.input`
  border: none;
  outline: none;
  background-color: ${Colors.lightOlder};
  font-size: 1rem;
  width: 100%;
  padding: 1.3em 0 1.3em 1.3em;
  border-radius: .8em;
  
  &::placeholder {
    color: ${Colors.gray};
  }
`
export const Error = styled.p`
  font-size: .8rem;
  color: ${Colors.danger};
  margin-top: .8em;
`
