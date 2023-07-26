// ========== Title
// import all packages
import styled from 'styled-components'
import { Colors } from '../../themes'

export const Title = styled.h1`
  color: ${Colors.dark};
  font-size: 1.8rem;
  text-align: center;

  @media screen and (min-width: 920px) {
    text-align: left;
    font-size: 2rem;
  }
`
