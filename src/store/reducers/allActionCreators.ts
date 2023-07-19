import * as logInOutActions from './auth/AuthActions'
import { authActions } from './auth/AuthSlice'
import * as guestsEventActions from './event/EventActions'
import { eventActions } from './event/EventSlice'

export const allActionCreators = {
  ...authActions,
  ...logInOutActions,
  ...eventActions,
  ...guestsEventActions,
}
