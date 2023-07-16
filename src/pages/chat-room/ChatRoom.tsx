// ========== Chat Room
// import all packages
import React from 'react'

// import all types
import { type IChatRoomProps } from './chatRoom.type'

// import hooks
import { useChatRoom } from '../../hooks'

export const ChatRoom: React.FC<IChatRoomProps> = () => {
  const { accessToken, handleToken, counter, handleCounter } = useChatRoom()

  return (
    <div>
      <h1>Chat Room</h1>
      <button type="button" onClick={handleToken}>Set Token</button>
      {accessToken.length > 0 && <p>Logged in</p>}
      <br />
      <br />
      <button type="button" onClick={handleCounter}>Counter {counter}</button>
    </div>
  )
}
