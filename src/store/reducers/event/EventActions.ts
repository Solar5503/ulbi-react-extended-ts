import { createAsyncThunk } from '@reduxjs/toolkit'
import { IEvent } from '../../../models/IEvent'
import UserService from '../../../services/UserService'

export const fetchGuests = createAsyncThunk(
  'guest/fetchAll',
  async (_, thunkAPI) => {
    try {
      const guests = UserService.getUsers()
      return guests
    } catch (error) {
      return thunkAPI.rejectWithValue(
        'There was an error loading the guest list'
      )
    }
  }
)

export const createEvent = createAsyncThunk(
  'event/create',
  async (event: IEvent, thunkAPI) => {
    try {
      const events = localStorage.getItem('events') ?? '[]'
      const jsonEvents = JSON.parse(events) as IEvent[]
      jsonEvents.push(event)
      localStorage.setItem('events', JSON.stringify(jsonEvents))
      return jsonEvents
    } catch (error) {
      return thunkAPI.rejectWithValue('Unable to create the event')
    }
  }
)

export const fetchEvents = createAsyncThunk(
  'event/fetchByUser',
  async (username: string, thunkAPI) => {
    try {
      const events = localStorage.getItem('events') ?? '[]'
      const jsonEvents = JSON.parse(events) as IEvent[]
      const currentUserEvents = jsonEvents.filter(
        (event) => event.author === username || event.guest === username
      )
      return currentUserEvents
    } catch (error) {
      thunkAPI.rejectWithValue('There was an error loading the event list')
    }
  }
)
