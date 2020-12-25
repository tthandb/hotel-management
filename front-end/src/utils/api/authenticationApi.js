import axios from "axios";

const authenticationApi = {
  getLoginStatus: () => {
    return axios.get('/login/status')
        .then(res => res.data)
        .catch(err => console.log(err))
  },
  postUserLogin: (user, callback) => {
    return axios.post('/login', user)
        .then(res => res.data.user.username ? callback(false, res.data) : callback(false, 'error logging in'))
  },
  getLoggedOut: () => {
    return axios.get('/logout')
        .catch(err => console.log(err))
  }
}
export default authenticationApi
