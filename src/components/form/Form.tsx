// ========== Form
// import all packages
import styled from 'styled-components'
import { Colors } from '../../themes'
import { Link } from 'react-router-dom'

export const Form = styled.form`
  width: 100%;
`

export const Label = styled.label`
  color: ${Colors.dark};
  font-size: 1rem;
`

export const Control = styled.div`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`

export const Field = styled.div`
  margin-top: .5rem;
`
export const TextLink = styled(Link)`
  color: ${Colors.darkYoung};
  font-size: .9rem;
  text-decoration: none;
`
