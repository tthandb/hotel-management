import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Header from '../components/header'
import api from '../utils/api/api'

class Billing extends Component {
  state = {
    firstname: '',
    lastname: '',
    arrivaldate: '',
    departuredate: '',
    departuresArray: [],
    roomNumber: '',
    taxRates: {},
    checkOutSuccess: false,
    checked_out: false,
    res_room_id: '',
    invoice_id: '',
    stayOver: false,
    dueOut: false,
    checkedOut: false,
    room_num: ''
  }

  makeAxiosCall = () => {
    const criteria = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      roomNumber: this.state.roomNumber,
      stayOver: this.state.stayOver,
      dueOut: this.state.dueOut,
      checkedOut: this.state.checkedOut
    }

    api
        .getDepartures(criteria)
        .then(res => {
          this.setState({departuresArray: res})
        })
        .catch(err => console.log(err))
  }

  handleCheckOut = (id, room_num) => {
    this.setState({
      res_room_id: id,
      checkOutSuccess: true,
      room_num: room_num
    })
  }

  handleLinkInvoice = (id, room_num) => {
    this.setState({res_room_id: id, room_num: room_num})
    api
        .getInvoiceId(id)
        .then(res =>
            this.setState({
              checkOutSuccess: true,
              invoice_id: res[0].invoice_id,
              checked_out: true
            })
        )
        .catch(err => console.log(err))
  }

  componentDidMount() {
    this.makeAxiosCall()
  }

  handleInputChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleCheckChange = event => {
    event.target.name === 'stayOver'
        ? this.setState({
          stayOver: !this.state.stayOver,
          dueOut: false,
          checkedOut: false
        })
        : event.target.name === 'dueOut'
        ? this.setState({
          stayOver: false,
          dueOut: !this.state.dueOut,
          checkedOut: false
        })
        : event.target.name === 'checkedOut'
            ? this.setState({
              stayOver: false,
              dueOut: false,
              checkedOut: !this.state.checkedOut
            })
            : this.setState({stayOver: false, dueOut: false, checkedOut: false})
  }

  handleFormSubmit = event => {
    event.preventDefault()
    this.makeAxiosCall()
  }

  render() {
    if (this.state.checkOutSuccess) {
      if (this.state.checked_out) {
        return (
            <Redirect
                to={{
                  pathname: '/cashiering/payment',
                  state: {
                    invoice_id: this.state.invoice_id,
                    room_num: this.state.room_num
                  }
                }}
            />
        )
      } else {
        return (
            <Redirect
                to={{
                  pathname: '/cashiering/payment',
                  state: {
                    res_room_id: this.state.res_room_id,
                    room_num: this.state.room_num
                  }
                }}
            />
        )
      }
    }
    return (
        <>
          <Header>FINANCE</Header>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    Room No
                  </div>
                  <div>
                    <input
                        type='text'
                        onChange={this.handleInputChange}
                        name='roomNumber'
                        placeholder='Room Number'
                        value={this.state.roomNumber}
                    />
                  </div>
                </div>
                <div>
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
                </div>
                <div>
                  <div>
                    {' '}
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
                </div>
              </div>
              <div>
                <div>
                  <div>
                    Stay Over
                  </div>
                  <div>
                    <input
                        type='checkbox'
                        name='stayOver'
                        checked={this.state.stayOver}
                        onChange={this.handleCheckChange}
                    />
                  </div>
                </div>
                <div>
                  <div>
                    Due Out
                  </div>
                  <div>
                    <input
                        type='checkbox'
                        name='dueOut'
                        checked={this.state.dueOut}
                        onChange={this.handleCheckChange}
                    />
                  </div>
                </div>
                <div>
                  <div>
                    Checked Out
                  </div>
                  <div>
                    <input
                        type='checkbox'
                        name='checkedOut'
                        checked={this.state.checkedOut}
                        onChange={this.handleCheckChange}
                    />
                  </div>
                </div>
              </div>
              <div>
                <button onClick={this.handleFormSubmit}>Search</button>
              </div>
            </div>
            <div>
              <div>
                <table>
                  <tbody>
                  <tr>
                    <th>Room Number</th>
                    <th>Name</th>
                    <th>Arrival Date</th>
                    <th>Departure Date</th>
                    <th>Balance</th>
                  </tr>

                  {this.state.departuresArray.map((departure, i) => (
                      <tr key={departure.res_room_id}>
                        <td>{departure.room_num}</td>
                        <td>{departure.name}</td>
                        <td>{departure.check_in_date}</td>
                        <td>{departure.check_out_date}</td>
                        <td>
                          {this.state.departuresArray[i].checked_out === 0 ? (
                              <button
                                  onClick={() =>
                                      this.handleCheckOut(
                                          departure.res_room_id,
                                          this.state.departuresArray[i].room_num
                                      )
                                  }
                              >
                                Check Out
                              </button>
                          ) : (
                              <button
                                  onClick={() =>
                                      this.handleLinkInvoice(
                                          departure.res_room_id,
                                          this.state.departuresArray[i].room_num
                                      )
                                  }
                              >
                                Invoice
                              </button>
                          )}
                        </td>
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

export default Billing
