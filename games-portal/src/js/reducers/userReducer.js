const initialState = {
  auth: false,
  cookieKey: '',
  userId: '',
  userData: {
    name: '',
    mail: '',
  },
  stats: undefined
}

export const user = (state = initialState, action) => {
  switch (action.type) {

    case 'AUTH_CHECK':
      return {
        ...state,
        auth: action.data.auth,
        cookieKey: action.data.cookieKey,
        userId: action.data.userId,
        userData: {
          name: action.data.name,
          mail: action.data.mail,
        }
      }

    case 'LOGGED':
      return {
        ...state,
        userId: action.data.id,
        cookieKey: action.data.key,
        auth: action.data.logged,
        userData: {
          name: action.data.name,
          mail: action.data.mail,
        }
      }

    case 'LOAD_STATS':
      return {
        ...state,
        stats: action.data
      }
    
    case 'LOGOUT':
      return initialState

    default:
      return state
  }
}