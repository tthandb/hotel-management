import React from 'react'

import authenticationApi from './utils/api/authenticationApi'
import {user, UserContext} from "./userContext";
import {Switch, Redirect, BrowserRouter} from 'react-router-dom'
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

class App extends React.Component {
  constructor() {
    super();
    this.postUserLogin = userData => {
      if (userData) {
        authenticationApi.postUserLogin(userData, (err, res) => {
          if (err === true) return console.log('failed to login')
          this.setState({user: res.user})
        }).then(r => console.log(r))
      }
    }
    this.getUserLogout = event => {
      event.preventDefault()
      authenticationApi.getLoggedOut().then(this.getUserStatus)
    }
    this.getUserStatus = () => {
      authenticationApi.getLoginStatus().then(res => {
        if (res) {
          this.setState(() => ({user: res.user}))
        }
      })
    }
    this.state = {
      user: user,
      getUserStatus: this.getUserStatus,
      getUserLogout: this.getUserLogout,
      postUserLogin: this.postUserLogin,

    }
  }

  render() {
    const {user} = this.state
    return (
        <UserContext.Provider value={this.state}>
          <BrowserRouter>
            {/*{user.access_id === 0 ? (<><Redirect to={'/'}/> <Login/></>) : (<></>)}*/}
            <Dashboard/>
          </BrowserRouter>
        </UserContext.Provider>

    )
  }
}

export default App;
