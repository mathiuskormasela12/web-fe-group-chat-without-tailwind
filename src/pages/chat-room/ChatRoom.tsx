// ========== Chat Room
// import all packages
import React, { Fragment } from 'react'

// import all types
import { type IChatRoomProps } from './chatRoom.type'

// import all components
import { Helmet } from '../../components'

// import hooks
import { useChatRoom } from '../../hooks'

// import config
import Config from '../../config'

export const ChatRoom: React.FC<IChatRoomProps> = () => {
  const { accessToken, handleToken, counter, handleCounter } = useChatRoom()

  const data = [
    {
      name: 'Env',
      value: Config.ENV
    },
    {
      name: 'Version',
      value: Config.VERSION
    },
    {
      name: 'App Url',
      value: Config.APP_URL
    },
    {
      name: 'Api Url',
      value: Config.API_URL
    }
  ]

  return (
    <Fragment>
      <Helmet title='Group Chat | Chat Room' />
      <h1>Chat Room</h1>
      <button type="button" onClick={handleToken}>Set Token</button>
      {accessToken.length > 0 && <p>Logged in</p>}
      <br />
      <br />
      <button type="button" onClick={handleCounter}>Counter {counter}</button>
      <p>Env</p>
      <ol>
        {data.map(item => (
          <li key={item.name}>
            {item.name} : {item.value}
          </li>
        ))}
      </ol>
    </Fragment>
  )
}
