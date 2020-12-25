import React, { Component } from 'react'
import moment from 'moment'
import api from '../utils/api/api'
import Header from '../components/header'
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
      .then(res =>
      {
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
        })}
      )
      .catch(err => console.log(err))
  }

  componentDidMount () {
    this.makeAxiosCall()
  }

  handleDateChange = event => {
    this.setState({ date: event.target.value }, () => {
      this.makeAxiosCall()
    })
  }

  render () {
    return (
      <>
        <Header>HOUSE STATUS</Header>
        <div>
          <div>
            <div>
              <div>Room Summary</div>
              <div>
                <div>
                  Total Rooms to Sell:
                </div>
                <div>
                  {this.state.roomsToSell}
                </div>
              </div>
              <div>
                <div>
                  Min. Available Tonight:
                </div>
                <div>
                  {this.state.minAvailableTonight}
                </div>
              </div>
              <div>
                <div>
                  Max. Occupied Tonight:
                </div>
                <div>
                  {this.state.maxOccupiedTonight}
                </div>
              </div>
            </div>
            <div>
              <div>Activity</div>
              <div>
                <div>
                  Stayovers:
                </div>
                <div>
                  {this.state.stayovers}
                </div>
              </div>
              <div>
                <div>
                  Departures Pending:{' '}
                </div>
                <div>
                  {this.state.departuresPending}
                </div>
              </div>
              <div>
                <div>
                  Departures Actual:
                </div>
                <div>
                  {this.state.departuresActual}
                </div>
              </div>
              <div>
                <div>
                  Arrivals Pending:
                </div>
                <div>
                  {this.state.arrivalsPending}
                </div>
              </div>
              <div>
                <div>
                  Arrivals Actual:
                </div>
                <div>
                  {this.state.arrivalsActual}
                </div>
              </div>
            </div>
            <div>
              <div>Room Status-Housekeeping</div>
              <div>
                <div></div>
                <div>
                  Vacant
                </div>
                <div>
                  Occupied
                </div>
              </div>
              <div>
                <div>
                  Clean
                </div>
                <div>
                  {this.state.cleanVacant}
                </div>
                <div>
                  {this.state.cleanOccupied}
                </div>
              </div>
              <div>
                <div>
                  Dirty
                </div>
                <div>
                  {this.state.dirtyVacant}
                </div>
                <div>
                  {this.state.dirtyOccupied}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div >
              Date:
              <input
                type='date'
                name='date'
                value={this.state.date}
                onChange={this.handleDateChange}
              />
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default HouseStatus
