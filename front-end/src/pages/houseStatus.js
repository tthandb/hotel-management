import React, { Component } from 'react'
import moment from 'moment'
import api from '../utils/api/api'
import Header from '../components/header'
import '../assets/css/houseStatus.css'
const today = moment().format('YYYY-MM-DD')

class HouseStatus extends Component {
  state = {
    date: today,
    roomsToSell: '',
    minAvailableTonight: '',
    maxOccupiedTonight: '',
    stayovers: '',
    departuresPending: '',
    departuresActual: '',
    arrivalsPending: '',
    arrivalsActual: '',
    cleanVacant: '',
    cleanOccupied: '',
    dirtyVacant: '',
    dirtyOccupied: ''
  }

  makeAxiosCall = () => {
    api
      .getHouseStatus(this.state.date)
      .then(res => {
        this.setState({
          roomsToSell: res.rooms[0].roomsToSell,
          cleanVacant: res.rooms[0].cleanVacant,
          cleanOccupied: res.rooms[0].cleanOccupied,
          dirtyVacant: res.rooms[0].dirtyVacant,
          dirtyOccupied: res.rooms[0].dirtyOccupied,
          stayovers: res.reservationRooms[0].stayovers,
          departuresPending: res.reservationRooms[0].departuresPending,
          departuresActual: res.reservationRooms[0].departuresActual,
          arrivalsPending: res.reservationRooms[0].arrivalsPending,
          arrivalsActual: res.reservationRooms[0].arrivalsActual,
          minAvailableTonight:
            Number(res.rooms[0].roomsToSell) -
            Number(res.reservationRooms[0].stayovers) -
            Number(res.reservationRooms[0].arrivalsPending) -
            Number(res.reservationRooms[0].arrivalsActual),
          maxOccupiedTonight:
            Number(res.reservationRooms[0].stayovers) +
            Number(res.reservationRooms[0].arrivalsPending) +
            Number(res.reservationRooms[0].arrivalsActual)
        })
      }
      )
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.makeAxiosCall()
  }

  handleDateChange = event => {
    this.setState({ date: event.target.value }, () => {
      this.makeAxiosCall()
    })
  }

  render() {
    return (
      <>
        <Header title='HOUSE STATUS' />
        <div className='house-status-container'>
          <div>
            Date:
                <input
              type='date'
              name='date'
              value={this.state.date}
              onChange={this.handleDateChange}
            />
          </div>
          <h3>Room summary</h3>
          <table>
            <tr>
              <td>Total rooms to sell</td>
              <td>{this.state.roomsToSell}</td>
            </tr>
            <tr>
              <td>Min available tonight</td>
              <td>{this.state.minAvailableTonight}</td>
            </tr>
            <tr>
              <td>Max occupied tonight</td>
              <td>{this.state.maxOccupiedTonight}</td>
            </tr>
          </table>
          <h3>Activity</h3>
          <table>
            <tr>
              <td>Stay-overs</td>
              <td>{this.state.stayovers}</td>
            </tr>
            <tr>
              <td>Departures pending</td>
              <td>{this.state.departuresPending}</td>
            </tr>
            <tr>
              <td>Departures actual</td>
              <td>{this.state.departuresActual}</td>
            </tr>
            <tr>
              <td>Arrivals pending</td>
              <td>{this.state.arrivalsPending}</td>
            </tr>
            <tr>
              <td>Arrivals actual</td>
              <td>{this.state.arrivalsActual}</td>
            </tr>
          </table>
          <h3>Room Status-Housekeeping</h3>
          <table>
            <tr>
              <th />
              <th>Vacant</th>
              <th>Occupied</th>
            </tr>
            <tr>
              <td>Clean</td>
              <td>{this.state.cleanVacant}</td>
              <td>{this.state.cleanOccupied}</td>
            </tr>
            <tr>
              <td>Dirty</td>
              <td>{this.state.dirtyVacant}</td>
              <td>{this.state.dirtyOccupied}</td>
            </tr>
          </table>
        </div>
      </>
    )
  }
}

export default HouseStatus
