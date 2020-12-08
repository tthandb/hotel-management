import React from 'react'

export const user = {
  user_id: 0,
  username: 'guest',
  access_id: 0,
  type: 'Guest'
}

export const UserContext = React.createContext({
  user,
  getUserStatus: () => {
  },
  postUserLogin: () => {
  },
  getUserLogout: () => {
  }
})