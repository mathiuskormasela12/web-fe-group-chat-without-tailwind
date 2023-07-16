// ========== Auth Slice
// import all packages
import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type IAuthSliceStates } from './auth.slice.types'

const initialState: IAuthSliceStates = {
  accessToken: '',
  refreshToken: ''
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken (state, action: PayloadAction<IAuthSliceStates>) {
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken
    },
    logout (state) {
      state.accessToken = ''
      state.refreshToken = ''
    }
  }
})

export const { setToken, logout } = authSlice.actions
export default authSlice.reducer
