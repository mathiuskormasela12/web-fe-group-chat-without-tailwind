// ========== Grid
// import app packages
import styled from 'styled-components'

export const Row = styled.div`
  padding: 3rem 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
`

export const Col = styled.div`
  width: 100%;
  &:last-child {
    display: none;
  }
`
