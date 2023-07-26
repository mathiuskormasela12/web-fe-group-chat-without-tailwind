// =========== Button Styles
// import all packages
import styled from 'styled-components'
import { Colors } from '../../themes'

export const ButtonPrimary = styled.button`
  border: none;
  outline: none;
  width: 100%;
  font-size: 1.15rem;
  font-weight: bold;
  padding: 1.3rem 0 1.3rem 1.3rem;
  border-radius: .8rem;
  color: ${Colors.light};
  background-color: ${Colors.primary};
  cursor: pointer;
  transition: opacity 0.5s;

  &:hover {
    opacity: 0.5;
  }
`

export const ButtonDanger = styled.button`
  border: none;
  outline: none;
  width: 100%;
  font-size: 1.15rem;
  font-weight: bold;
  padding: 1.3rem 0 1.3rem 1.3rem;
  border-radius: .8rem;
  color: ${Colors.light};
  background-color: ${Colors.danger};
`
