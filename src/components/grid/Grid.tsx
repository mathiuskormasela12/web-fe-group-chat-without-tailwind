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

    @media screen and (min-width: 1200px) {
      display: flex;
      justify-content: center;
      flex: 2;
    }

    @media screen and (min-width: 1024px) and (max-width: 1200px) {
      display: flex;
      justify-content: center;
      flex: 1.2;
    }
  }


  @media screen and (min-width: 1200px) {
    flex: 1.3;
  }

  @media screen and (min-width: 920px) and (max-width: 1200px) {
    flex: 1;
  }
`
