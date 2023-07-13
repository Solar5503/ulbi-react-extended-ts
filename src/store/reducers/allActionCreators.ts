import * as logInOutActions from './auth/AuthActions'
import { authActions } from './auth/AuthSlice'

export const allActionCreators = { ...authActions, ...logInOutActions }
