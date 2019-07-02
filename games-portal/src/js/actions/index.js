export const authCheckAction = (data) => ({
  type: 'AUTH_CHECK',
  data: data,
})

export const loggedAction = (data) => ({
  type: 'LOGGED',
  data: data,
})

export const logoutAction = (data) => ({
  type: 'LOGOUT',
  data: data,
})

export const statsAction = (data) => ({
  type: 'LOAD_STATS',
  data: data,
})