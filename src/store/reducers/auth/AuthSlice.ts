import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../../models/IUser'
import { getErrorMessage } from '../../../utils/errorMessage'
import { login, logout } from './AuthActions'
import { AuthState } from './types'

const initialState: AuthState = {
  isAuth: false,
  user: {} as IUser,
  isLoading: false,
  error: '',
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(login.rejected, (state, action: PayloadAction<unknown>) => {
        state.error = getErrorMessage(action.payload)
        state.isLoading = false
        state.isAuth = false
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.isLoading = false
        state.error = ''
        state.user = action.payload
        state.isAuth = true
      })
      .addCase(logout.fulfilled, (state) => {
        state.isAuth = false
        state.isLoading = false
        state.error = ''
        state.user = {} as IUser
      })
  },
})

export const { actions: authActions, reducer: authReducer } = AuthSlice
