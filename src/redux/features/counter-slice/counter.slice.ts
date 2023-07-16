// ========== Counter Slice
// import all packages
import { createSlice } from '@reduxjs/toolkit'

interface IInitialStates {
  counter: number
}

const initialState: IInitialStates = {
  counter: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment (state) {
      state.counter++
    }
  }
})

export const { increment } = counterSlice.actions
export default counterSlice.reducer
