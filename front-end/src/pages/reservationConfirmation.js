import React, { Component } from 'react'
import api from '../utils/api/api'
import Header from '../components/header'
import { Redirect } from 'react-router-dom'

class ReservationConfirmation extends Component {
  state = {
    ReservationInfo: {},
    RoomInfo: [],
    reservation_id: '',
    reservationChosen: false
  }

  componentDidMount () {
    let reservation_id = ''
    if (localStorage && localStorage.getItem('reservation_id')) {
      reservation_id = JSON.parse(localStorage.getItem('reservation_id'))
    }
    this.setState({ reservation_id: reservation_id }, () => {
      api
        .getReservation(this.state.reservation_id)
        .then(res =>
          this.setState({
            ReservationInfo: res.resCust[0],
            RoomInfo: res.resRooms
          })
        )
        .catch(err => console.log(err))
    })
  }

  handleChosenReservation = id => {
    this.setState({ reservationChosen: true })
  }

  printFunction () {
    window.print()
  }

  render () {
    if (this.state.reservationChosen) {
      localStorage.setItem('reservation_id', this.state.reservation_id)
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
        <Header>RESERVATION CONFIRMATION</Header>
        <div>
          <div>
            <div>
              <div>
                <div></div>
                <div>
                  <strong>Name: </strong>
                  {this.state.ReservationInfo.first_name}{' '}
                  {this.state.ReservationInfo.last_name}
                </div>
              </div>
              <div>
                <div></div>
                <div>
                  <strong>Address: </strong>
                  {this.state.ReservationInfo.address},{' '}
                  {this.state.ReservationInfo.city},{' '}
                  {this.state.ReservationInfo.state},{' '}
                  {this.state.ReservationInfo.zip}
                </div>
              </div>
              <div>
                <div></div>
                <div>
                  <strong>Email: </strong> {this.state.ReservationInfo.email}
                </div>
                <div>
                  <strong>Phone: </strong> {this.state.ReservationInfo.phone}
                </div>
              </div>
              <div>
                <div></div>
                <div>
                  <strong>Credit Card Number: </strong>****
                  {this.state.ReservationInfo.ccLastFour}
                </div>
                <div>
                  <strong>Exp Date: </strong>
                  {this.state.ReservationInfo.cc_expiration}
                </div>
              </div>
              <hr />
              <div>
                <div></div>
                {this.state.RoomInfo.map(room => (
                  <div key={room.res_room_id}>
                    <ul>
                      <li>
                        <strong>Confirmation Number: </strong>
                        {room.confirmation_code}
                      </li>
                      <li>
                        <strong>Arrival Date: </strong>
                        {room.check_in_date}
                      </li>
                      <li>
                        <strong>Departure Date: </strong>
                        {room.check_out_date}
                      </li>
                      <li>
                        <strong>Adults: </strong>
                        {room.adults}
                      </li>
                      <li>
                        <strong>Rate: </strong>
                        {room.rate}
                      </li>
                      <li>
                        <strong>Room Type: </strong>
                        {room.type}
                      </li>
                      <li>
                        <strong>Comments: </strong>
                        {room.comments}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>

              <div>
                <div></div>
                <div>
                  Made by User ID: {this.state.ReservationInfo.user_id}
                </div>
                <div>
                  Created On: {this.state.ReservationInfo.created_at}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            type='submit'
            className='btn btn-primary'
            onClick={() =>
              this.handleChosenReservation(this.state.reservation_id)
            }
          >
            Change
          </button>
          <button
            type='submit'
            className='btn btn-primary ml-3'
            onClick={this.printFunction}
          >
            Print
          </button>
        </div>
      </>
    )
  }
}
export default ReservationConfirmation
