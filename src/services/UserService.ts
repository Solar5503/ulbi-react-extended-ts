import axios from 'axios'
import { IUser } from '../models/IUser'

export default class UserService {
  static async getUsers(): Promise<IUser[]> {
    const response = await axios.get<IUser[]>('./users.json')
    return response.data
  }
}
