import { IEvent } from '../../../models/IEvent'
import { IUser } from '../../../models/IUser'

export interface EventState {
  guests: IUser[]
  isLoadingGuests: boolean
  isLoadingEvent: boolean
  isLoadingEvents: boolean
  error: string
  events: IEvent[]
}
