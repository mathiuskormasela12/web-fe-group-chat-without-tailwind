// ========== Google Button
// import all packages
import React from 'react'
import * as Styled from './googleButton.styles'

// import assets
import google from '../../assets/images/google.svg'

export const GoogleButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <Styled.Button>
      <Styled.Img src={google} alt="Google Auth" />
      {props.children}
    </Styled.Button>
  )
}
