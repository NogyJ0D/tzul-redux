import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    logged: false,
    name: undefined
  },
  reducers: {
    login (state, action) {
      state.logged = true
      state.name = action.payload
    },
    logout (state, action) {
      state.logged = false
      state.name = undefined
    }
  }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer
