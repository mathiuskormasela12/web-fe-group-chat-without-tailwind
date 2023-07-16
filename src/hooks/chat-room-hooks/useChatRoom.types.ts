// =========== Use Chat Room Hooks Types

export type HandleToken = () => void

export type HandleCounter = () => void

export type UseChatRoom = () => ({
  accessToken: string
  handleToken: HandleToken
  counter: number
  handleCounter: HandleCounter
})
