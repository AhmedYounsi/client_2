import axios from 'axios'
import api from '../utils/api'

export const LoginAction = async (body, dispatch) => {
  try {
    const res = await api.post('/users/signin', body)
    dispatch({
      type: 'SET_TOKEN',
      payload: res.data.token,
    })
    dispatch({
      type: 'SET_USER',
      payload: res.data.user,
    })
  } catch (err) {
    console.log(err)
  }
}

// Register User
export const RegisterAction = async (userData, history) => {
  try {
    const data = {
      name: 'Firstname',
      email: 'zzfghz',
      avatar: '',
      password: 'aaa',
      lastName: 'Lastname',
      tel: 46489456,
      address: 'Adresse',
      DateOfBirth: new Date(),
      office: 'Office',
      departement: 'Dep',
      post: 'Post',
      reportsTo: 'Report',
      typeContrat: 'Contrat',
      from: '',
    }
    const res = await api.post('/users', userData)
    if (res)
      history.push({
        pathname: '/liste_employee',
        state: { userIsSaved: true },
      })
  } catch (err) {
    // const errors = err.response.data.errors;
    console.log(err)
  }
}
