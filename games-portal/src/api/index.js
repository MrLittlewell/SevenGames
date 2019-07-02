import axios from 'axios'


const apiUrl = window.config.apiUrl

export const checkAuthKey = (data) => {
  return (
    axios.get(`${apiUrl}/api/v1/auth`, { params: { authKey: data }})
  )
}

export const AuthApi = (data) => {
  return (
    axios.post(`${apiUrl}/api/v1/auth`, {
      params: {
        email: data.email,
        password: data.password,
        key: data.key
      }
    })
  )
}

export const SignUpApi = (data) => {
  console.log(data)
  return (
    axios.post(`${apiUrl}/api/v1/signup`, {
      params: {
        email: data.email,
        password: data.password,
        name: data.name
      }
    })
  )
}

export const GetStats = (data) => {
  return (
    axios.post(`${apiUrl}/api/v1/stats`, {
      params: {
        userId: data
      }
    })
  )
}

export const SaveResultApi = (data) => {
  // console.log(data)
  return (
    axios.post(`${apiUrl}/api/v1/saveResult`, {
      params: {
        userID: data.userId,
        gameID: data.gameId,
        points: data.points,
      }
    })
  )
}

export const GetGameData = (data) => {
  return (
    axios.get(`${apiUrl}/api/v1/gamedata`, { params: { gameId: data }})
  )
}