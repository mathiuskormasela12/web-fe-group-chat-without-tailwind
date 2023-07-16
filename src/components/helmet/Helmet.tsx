// ========== Helmet
// import all packages
import React from 'react'
import { HelmetProvider, Helmet as ReactHelmet } from 'react-helmet-async'
import { type IHelmetProps } from './helmet.types'

export const Helmet: React.FC<IHelmetProps> = (props) => {
  const { title, children } = props
  return (
    <HelmetProvider>
      <ReactHelmet>
        <title>{title}</title>
      </ReactHelmet>
      {(children !== null && children)}
    </HelmetProvider>
  )
}
