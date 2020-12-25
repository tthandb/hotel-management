import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Header from '../components/header'
import DateRange from '../components/dateRange/dateRangeUpdate'
import api from '../utils/api/api'
import moment from 'moment'

class AllReservations extends Component {
  // Setting the initial values of this.state.username and this.state.password
  constructor () {
    super()
    this.handleFromChange = this.handleFromChange.bind(this)
    this.handleToChange = this.handleToChange.bind(this)
  }
  state = {
    firstname: '',
    lastname: '',
    sdate: '',
    edate: '',
    resRooms: [],
    reservationChosen: false,
    chosenReservationId: ''
  }
  showFromMonth () {
    const { from, to } = this.state
    if (!from) {
      return
    }
    if (moment(to).diff(moment(from), 'months') < 2) {
      this.to.getDayPicker().showMonth(from)
    }
  }
  handleFromChange (sdate) {
    this.setState({ sdate })
  }
  handleToChange (edate) {
    this.setState({ edate }, this.showFromMonth)
  }
  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  makeAxiosCall = () => {
    const criteria = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      sdate:
        this.state.sdate === ''
          ? ''
          : moment(this.state.sdate).format('YYYY-MM-DD'),
      edate:
        this.state.edate === ''
          ? ''
          : moment(this.state.edate).format('YYYY-MM-DD'),
    }
    api
      .getSomeReservations(criteria)
      .then(res => this.setState({ resRooms: res }))
      .catch(err => console.log(err))
  }
  handleFormSubmit = event => {
    event.preventDefault()
    this.makeAxiosCall()
  }
  handleChosenReservation = id => {
    this.setState({ reservationChosen: true, chosenReservationId: id })
  }
  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }
  render () {
    if (this.state.reservationChosen) {
      localStorage.setItem('reservation_id', this.state.chosenReservationId)
      return (
        <Redirect
          to={{
            pathname: '/reserve/updatereservation'
          }}
        />
      )
    }

    return (
      <>
        <Header>ALL RESERVATIONS</Header>
        <div>
          <div>
            <div >
              Arrival
            </div>
            <div >
              <DateRange
                handleFromChange={this.handleFromChange}
                handleToChange={this.handleToChange}
                sdate={this.state.sdate}
                edate={this.state.edate}
              />
            </div>
          </div>

          <div>
            <div >
              Last Name
            </div>
            <div>
              <input
                type='text'
                placeholder='Last Name'
                name='lastname'
                value={this.state.lastname}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              First Name
            </div>
            <div>
              <input
                type='text'
                placeholder='First Name'
                name='firstname'
                value={this.state.firstname}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <button onClick={this.handleFormSubmit}>Search</button>
            </div>
          </div>

          <div>
            <div >
              <table>
                <tbody>
                  <tr>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Arrival Date</th>
                    <th>Departure Date</th>
                    <th>Room Type</th>
                    <th>Status</th>
                  </tr>

                  {this.state.resRooms.map(res => (
                    <tr
                      key={res.res_room_id}
                      onClick={() =>
                        this.handleChosenReservation(res.reservation_id)
                      }
                    >
                      <td>{res.last_name}</td>
                      <td>{res.first_name}</td>
                      <td>{res.check_in_date}</td>
                      <td>{res.check_out_date}</td>
                      <td>{res.type}</td>
                      <td>{res.active === 1 ? 'Active' : 'Cancelled'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default AllReservations
