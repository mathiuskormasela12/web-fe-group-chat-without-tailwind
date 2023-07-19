// ========== Google Button Style
// import all packages
import styled from 'styled-components'
import { Colors } from '../../themes'

export const Button = styled.button`
  border: none;
  outline: none;
  width: 100%;
  font-size: 1.12rem;
  background-color: transparent;
  padding: 1.3rem 0 1.3rem 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Colors.darkYoung};
  cursor: pointer;
`

export const Img = styled.img`
  margin-right: .5rem;
`
