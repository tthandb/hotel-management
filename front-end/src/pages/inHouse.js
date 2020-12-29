import React, { Component } from 'react'
import Header from '../components/header'
import api from '../utils/api/api'
import { Redirect } from 'react-router-dom'

class InHouse extends Component {
  state = {
    arrivaldate: '',
    departuredate: '',
    firstname: undefined,
    lastname: undefined,
    roomNumber: undefined,
    confirmationNumber: undefined,
    reservationChosen: false,
    chosenReservationId: '',
    guestsArray: []
  }

  makeAxiosCall = () => {
    const criteria = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      roomNumber: this.state.roomNumber,
      confirmationNumber: this.state.confirmationNumber
    }
    api
      .getGuests(criteria)
      .then(res => this.setState({ guestsArray: res }))
      .catch(err => console.log(err))
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    this.makeAxiosCall()
  }

  handleChosenReservation = id => {
    this.setState({ reservationChosen: true, chosenReservationId: id })
  }

  printFunction () {
    window.print()
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
        <Header title='IN-HOUSE GUESTS'/>
        <div>
          <div>
            <div>
              <div>
                <div >
                  Room
                </div>
                <div >
                  <input
                    name='roomNumber'
                    placeholder='Room Number'
                    value={this.state.roomNumber}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div>
                <div >
                  First Name
                </div>
                <div >
                  <input
                    type='text'
                    placeholder='Name'
                    name='firstname'
                    value={this.state.firstname}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div >
                  Last Name
                </div>
                <div >
                  <input
                    type='text'
                    placeholder='Last Name'
                    name='lastname'
                    value={this.state.lastname}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div >
              <button onClick={this.handleFormSubmit}>
                Search
              </button>
            </div>
            <div >
              <button
                type='button'
                onClick={this.printFunction}
              >
                Print
              </button>
            </div>
          </div>

          <div>
            <div >
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Arrival Date</th>
                    <th>Departure Date</th>
                    <th>Room Type</th>
                    <th>Room Number</th>
                  </tr>
                  {this.state.guestsArray.map((guest, i) => (
                    <tr
                      key={i}
                      onClick={() =>
                        this.handleChosenReservation(guest.reservation_id)
                      }
                    >
                      <td>
                        {guest.first_name} {guest.last_name}
                      </td>
                      <td>{guest.check_in_date}</td>
                      <td>{guest.check_out_date}</td>
                      <td>{guest.type}</td>
                      <td>{guest.room_num}</td>
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

export default InHouse
