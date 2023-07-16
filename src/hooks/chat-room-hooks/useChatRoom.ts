// ========== Use Chat Room
// import all packages
import { useDispatch, useSelector } from 'react-redux'
import { type RootState, type AppDispatch } from '../../redux/store'
import { setToken } from '../../redux/features/auth-slice/auth.slice'
import { increment } from '../../redux/features/counter-slice/counter.slice'
import { type HandleCounter, type HandleToken, type UseChatRoom } from './useChatRoom.types'

export const useChatRoom: UseChatRoom = () => {
  const dispatch = useDispatch<AppDispatch>()
  const accessToken: string = useSelector((states: RootState) => states.authReducer.accessToken)
  const counter: number = useSelector((states: RootState) => states.counterReducer.counter)

  const handleToken: HandleToken = (): void => {
    dispatch(setToken({
      accessToken: (accessToken === '') ? Date.now().toString() : '',
      refreshToken: (accessToken === '') ? Date.now().toString() : ''
    }))
  }

  const handleCounter: HandleCounter = (): void => {
    dispatch(increment())
  }

  return {
    accessToken,
    handleToken,
    counter,
    handleCounter
  }
}
