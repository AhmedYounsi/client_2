import axios from 'axios'
import api from '../utils/api'

export const GetUsers = async () => {
  try {
    const res = await api.get('/users/get_all')
    return res.data
  } catch (error) {
    return error.response
  }
}
