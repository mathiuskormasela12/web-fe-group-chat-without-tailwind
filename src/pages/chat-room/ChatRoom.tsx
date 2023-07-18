// ========== Chat Room
// import all packages
import React, { Fragment } from 'react'

// import all components
import {
  Title,
  Hero,
  Helmet,
  Container,
  Button
} from '../../components'
import { useChatRoom } from '../../hooks'

export const ChatRoom: React.FC = () => {
  const { counter, handleCounter } = useChatRoom()

  return (
    <Fragment>
      <Helmet title='Group Chat | Chat Room' />
     <Hero>
      <Container>
       <Title>Chat Room</Title>
       <Button onClick={handleCounter} variant="primary">
        Counter {counter}
       </Button>
      </Container>
     </Hero>
    </Fragment>
  )
}
