import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IUser } from '../../../models/IUser'

export const login = createAsyncThunk(
  'auth/login',
  async ({ username, password }: IUser, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>('./users.json')
      const mockUser = response.data.find(
        (user) => user.username === username && user.password === password
      )
      if (mockUser) {
        localStorage.setItem('auth', 'true')
        localStorage.setItem('username', mockUser.username)
        return mockUser
      } else return thunkAPI.rejectWithValue('Incorrect login or password!')
    } catch (error) {
      return thunkAPI.rejectWithValue('An error occurred while logging in!')
    }
  }
)

export const logout = createAsyncThunk('auth/logout', async () => {
  localStorage.removeItem('auth')
  localStorage.removeItem('username')
})
