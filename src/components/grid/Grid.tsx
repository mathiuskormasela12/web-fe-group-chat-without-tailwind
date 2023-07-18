// ========== Grid
// import app packages
import styled from 'styled-components'

export const Row = styled.div`
  padding: 3rem 0 2rem 0;
  min-height: 100vh;
`

export const Col = styled.div`
  width: 100%;
  &:last-child {
    display: none;
  }
`
