import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: JSON.parse(sessionStorage.getItem('user')) || null
  },
  reducers: {
    login: (state, action) => {
      console.log(action)
      state.user = action.payload
      sessionStorage.setItem('user', JSON.stringify(action.payload))
    },
    logout: (state) => {
      console.log('setting state')
      state.user = null
      sessionStorage.setItem('user', null)
    },
  }
})

export const { login, logout } = userSlice.actions

export const selectUser = (state) => state.user.user

export default userSlice.reducer