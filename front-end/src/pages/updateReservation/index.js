import React, {Component} from 'react'
import api from '../../utils/api/api'
import DateRange from '../../components/dateRange'
import UpdateRegisterForm from '../../components/updateReservationForm'
import moment from 'moment'
import Header from "../../components/header";

class UpdateReservation extends Component {
  constructor(props) {
    super(props)
    this.handleFromChange = this.handleFromChange.bind(this)
    this.handleToChange = this.handleToChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleCancelSubmit = this.handleCancelSubmit.bind(this)
  }

  state = {
    customerId: '',
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    country: '',
    arrivaldate: '',
    departuredate: '',
    nights: '',
    adults: 1,
    numRooms: 1,
    roomNumber: '',
    roomtype: '',
    RoomTypes: [],
    updateSuccess: false,
    reservationId: '',
    resRoomId: '',
    comments: '',
    rate: '',
    cancelSuccess: false,
    checkedIn: 0,
    active: 1,
    errors: {}
  }

  showFromMonth() {
    const {from, to} = this.state
    if (!from) {
      return
    }
    if (moment(to).diff(moment(from), 'months') < 2) {
      this.to.getDayPicker().showMonth(from)
    }
  }

  handleFromChange(arrivaldate) {
    this.setState({arrivaldate})
  }

  handleToChange(departuredate) {
    this.setState({departuredate}, this.showFromMonth)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  validateForm() {
    let errors = {}
    let formIsValid = true
    if (!this.state.firstname) {
      formIsValid = false
      errors['firstname'] = '*Please enter your firstname.'
    }
    if (typeof this.state.firstname !== 'undefined') {
      if (!this.state.firstname.match(/^[a-zA-Z ]*$/)) {
        formIsValid = false
        errors['firstname'] = '*Please enter alphabet characters only.'
      }
    }
    if (!this.state.lastname) {
      formIsValid = false
      errors['lastname'] = '*Please enter your lastname.'
    }
    if (typeof this.state.lastname !== 'undefined') {
      if (!this.state.lastname.match(/^[a-zA-Z ]*$/)) {
        formIsValid = false
        errors['lastname'] = '*Please enter alphabet characters only.'
      }
    }
    if (!this.state.email) {
      formIsValid = false
      errors['email'] = '*Please enter your email-ID.'
    }
    if (typeof this.state.email !== 'undefined') {
      let pattern = new RegExp(
          /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      )
      if (!pattern.test(this.state.email)) {
        formIsValid = false
        errors['email'] = '*Please enter valid email-ID.'
      }
    }
    if (!this.state.phone) {
      formIsValid = false
      errors['phone'] = '*Please enter your mobile no.'
    }
    if (typeof this.state.phone !== 'undefined') {
      if (!this.state.phone.match(/^\d{3}-\d{3}-\d{4}$/)) {
        formIsValid = false
        errors['phone'] = '*Please enter valid mobile no.'
      }
    }
    this.setState({
      errors: errors
    })
    return formIsValid
  }

  handleInputChange = event => {
    if (event.target.name === 'roomtype') {
      const roomKey = parseInt(event.target.value) - 1
      this.setState({rate: this.state.RoomTypes[roomKey].rate})
    }
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  componentDidMount() {
    let reservation_id = ''
    if (localStorage && localStorage.getItem('reservation_id')) {
      reservation_id = JSON.parse(localStorage.getItem('reservation_id'))
      this.setState({reservationId: reservation_id})
      api
          .getRoomTypes()
          .then(res =>
              this.setState({RoomTypes: res, roomtype: res[0].room_type_id})
          )
          .catch(err => console.log(err))
      api
          .getReservation(reservation_id)
          .then(res =>
              this.setState({
                active: res.resCust[0].active,
                customerId: res.resCust[0].customer_id,
                firstname: res.resCust[0].first_name,
                lastname: res.resCust[0].last_name,
                address: res.resCust[0].address,
                city: res.resCust[0].city,
                country: res.resCust[0].country,
                email: res.resCust[0].email,
                phone: res.resCust[0].phone,
                resRoomId: res.resRooms[0].res_room_id,
                departuredate: new Date(res.resRooms[0].check_out_date),
                arrivaldate: new Date(res.resRooms[0].check_in_date),
                adults: res.resRooms[0].adults,
                roomtype: res.resRooms[0].room_type_id,
                rate: res.resRooms[0].rate,
                roomNumber: res.resRooms[0].room_num,
                comments: res.resRooms[0].comments,
                checkedIn: res.resRooms[0].checked_in
              })
          )
          .catch(err => console.log(err))
    }
  }

  handleFormSubmit(e) {
    e.preventDefault()
    if (this.validateForm()) {
      this.makeAxiosCall()
    }
  }

  handleCancelSubmit(e) {
    e.preventDefault()
    api
        .cancelReservation(this.state.reservationId)
        .then(() =>
            this.setState({cancelSuccess: true, active: 0, updateSuccess: false})
        )
        .catch(err => console.log(err))
  }

  makeAxiosCall = () => {
    const data = {
      reservation_id: this.state.reservationId,
      customerId: this.state.customerId,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      address: this.state.address,
      city: this.state.city,
      country: this.state.country,
      email: this.state.email,
      phone: this.state.phone,
      departuredate: moment(this.state.departuredate).format('YYYY-MM-DD'),
      arrivaldate: moment(this.state.arrivaldate).format('YYYY-MM-DD'),
      adults: this.state.adults,
      roomtype: this.state.roomtype,
      resRoomId: this.state.resRoomId,
      comments: this.state.comments,
      rate: this.state.rate,
      user_id: this.props.user.user_id
    }
    api
        .updateReservation(data)
        .then(() => this.setState({updateSuccess: true, cancelSuccess: false}))
        .catch(err => console.log(err))
  }

  render() {
    return (
        <>
          <Header title="UPDATE RESERVATION"/>
          <div>
            <div>
              <div>
                <div>
                  <div className='form-group'>
                    <label htmlFor='room_number'>Room Number</label>
                    <input
                        className='form-control'
                        type='tel'
                        placeholder='Room Number'
                        name='roomNumber'
                        id='room_number'
                        value={this.state.roomNumber}
                        onChange={this.handleInputChange}
                    />
                  </div>
                  <div>
                    <DateRange
                        handleFromChange={this.handleFromChange}
                        handleToChange={this.handleToChange}
                        from={this.state.arrivaldate}
                        to={this.state.departuredate}
                    />
                  </div>
                </div>
                <div>
                  <div>
                    Nights
                  </div>
                  <div>
                    <input
                        type='number'
                        placeholder='Number of Nights'
                        name='nights'
                        value={
                          this.state.departuredate &&
                          Math.round(
                              (this.state.departuredate - this.state.arrivaldate) /
                              (1000 * 60 * 60 * 24)
                          )
                        }
                        onChange={this.handleInputChange}
                    />
                  </div>
                  <div>
                    No of Rooms
                  </div>
                  <div>
                    <input
                        type='number'
                        placeholder='Number of Rooms'
                        name='numRooms'
                        value={this.state.numRooms}
                        disabled
                    />
                  </div>
                </div>
                <div>
                  <div>
                    Adults
                  </div>
                  <div>
                    <input
                        id=''
                        type='number'
                        name='adults'
                        placeholder='Adults'
                        value={this.state.adults}
                        onChange={this.handleInputChange}
                    />
                  </div>
                  <div>
                    Room Type
                  </div>
                  <div>
                    <select
                        id='roomType'
                        name='roomtype'
                        onChange={this.handleInputChange}
                    >
                      {this.state.RoomTypes.map(type => (
                          <option key={type.room_type_id} value={type.room_type_id}>
                            {type.type} - {type.rate}
                          </option>
                      ))}
                    </select>
                  </div>
                </div>

                <UpdateRegisterForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleChange={this.handleChange}
                    firstname={this.state.firstname}
                    lastname={this.state.lastname}
                    phone={this.state.phone}
                    email={this.state.email}
                    address={this.state.address}
                    city={this.state.city}
                    country={this.state.country}
                    errors={this.state.errors}
                    comments={this.state.comments}
                    updateSuccess={this.state.updateSuccess}
                    cancelSuccess={this.state.cancelSuccess}
                    checkedIn={this.state.checkedIn}
                    active={this.state.active}
                    handleCancelSubmit={this.handleCancelSubmit}
                />
              </div>
            </div>
          </div>
        </>
    )
  }
}

export default UpdateReservation
