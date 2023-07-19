import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IEvent } from '../../../models/IEvent'
import { IUser } from '../../../models/IUser'
import { getErrorMessage } from '../../../utils/errorMessage'
import { createEvent, fetchEvents, fetchGuests } from './EventActions'
import { EventState } from './types'

const initialState: EventState = {
  guests: [],
  isLoadingGuests: false,
  isLoadingEvent: false,
  isLoadingEvents: false,
  error: '',
  events: [],
}

export const EventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(
        fetchGuests.rejected,
        (state, action: PayloadAction<unknown>) => {
          state.error = getErrorMessage(action.payload)
          state.isLoadingGuests = false
        }
      )
      .addCase(fetchGuests.pending, (state) => {
        state.isLoadingGuests = true
      })
      .addCase(
        fetchGuests.fulfilled,
        (state, action: PayloadAction<IUser[]>) => {
          state.guests = action.payload
          state.isLoadingGuests = false
          state.error = ''
        }
      )
      .addCase(
        createEvent.fulfilled,
        (state, action: PayloadAction<IEvent[]>) => {
          state.events = action.payload
          state.error = ''
          state.isLoadingEvent = false
        }
      )
      .addCase(
        createEvent.rejected,
        (state, action: PayloadAction<unknown>) => {
          state.error = getErrorMessage(action.payload)
          state.isLoadingEvent = false
        }
      )
      .addCase(createEvent.pending, (state) => {
        state.isLoadingEvent = true
      })
      .addCase(
        fetchEvents.rejected,
        (state, action: PayloadAction<unknown>) => {
          state.error = getErrorMessage(action.payload)
          state.isLoadingEvents = false
        }
      )
      .addCase(fetchEvents.pending, (state) => {
        state.isLoadingEvents = true
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.events = action.payload ?? ([] as IEvent[])
        state.error = ''
        state.isLoadingEvents = false
      })
  },
})

export const { actions: eventActions, reducer: eventReducer } = EventSlice
