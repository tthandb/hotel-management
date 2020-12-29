import React from 'react'
import authenticationApi from './utils/api/authenticationApi'
import {user, UserContext} from './userContext'
import {Switch, Redirect, BrowserRouter} from 'react-router-dom'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import NewReservation from './pages/newReservation'
import UpdateReservation from './pages/updateReservation'
import Arrivals from './pages/arrivals'
import Billing from './pages/billing'
import Payment from './pages/payment'
import Maintenance from './pages/maintenance'
import HouseStatus from './pages/houseStatus'
import AllReservations from './pages/allReservations'
import InHouse from './pages/inHouse'
import Housekeeping from './pages/housekeeping'
import {PrivateAccessRoute} from './components/privateAccessRoute'
import ReservationConfirmation from './pages/reservationConfirmation'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.postUserLogin = userData => {
      if (userData) {
        authenticationApi.postUserLogin(userData, (err, res) => {
          if (err === true) {
            return console.log('Failed to login')
          }
          localStorage.setItem(user, res.user)
          this.setState({user: res.user})
        }).then(console.log('Login successfully'))
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
            {user.access_id === 0 ? (
                <>
                  <Redirect to={'/'}/>
                  <Login/>
                </>
            ) : (
                <div>
                  <Switch>
                    <PrivateAccessRoute
                        exact
                        strict
                        path='/'
                        component={Dashboard}
                        accessId='1'
                    />
                    <PrivateAccessRoute
                        exact
                        path='/reserve/new'
                        component={NewReservation}
                        accessId='1'
                    />
                    <PrivateAccessRoute
                        exact
                        path='/reserve/allreservations'
                        component={AllReservations}
                        accessId='1'
                    />
                    <PrivateAccessRoute
                        exact
                        path='/reserve/updatereservation'
                        component={UpdateReservation}
                        accessId='1'
                    />
                    <PrivateAccessRoute
                        exact
                        path='/reservationcomfirmation'
                        component={ReservationConfirmation}
                        accessId='1'
                    />
                    <PrivateAccessRoute
                        exact
                        path='/frontdesk/arrivals'
                        component={Arrivals}
                        accessId='1'
                    />
                    <PrivateAccessRoute
                        exact
                        path='/frontdesk/inhouse'
                        component={InHouse}
                        accessId='1'
                    />
                    <PrivateAccessRoute
                        exact
                        path='/frontdesk/maintenance'
                        component={Maintenance}
                        accessId='1'
                    />
                    <PrivateAccessRoute
                        exact
                        path='/cashiering/billing'
                        component={Billing}
                        accessId='1'
                    />
                    <PrivateAccessRoute
                        exact
                        path='/cashiering/payment'
                        component={Payment}
                        accessId='1'
                    />
                    <PrivateAccessRoute
                        exact
                        path='/reports/housekeeping'
                        component={Housekeeping}
                        accessId='1'
                    />
                    <PrivateAccessRoute
                        exact
                        path='/reports/houseStatus'
                        component={HouseStatus}
                        accessId='1'
                    />
                  </Switch>
                </div>
            )}
          </BrowserRouter>
        </UserContext.Provider>

    )
  }
}

export default App
