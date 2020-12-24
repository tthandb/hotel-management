import React, { Component } from 'react'
import Header from '../components/header'
import api from '../utils/api/api'
import { Link } from 'react-router-dom'
import moment from 'moment'
class Payment extends Component {
  state = {
    RoomInfo: [],
    InvoiceArray: [],
    invoice_id: '',
    paid: false,
    res_room_id: '',
    room_num: '',
    taxRates: {},
    creditCardChecked: true,
    cashChecked: false,
    payment_type: 'Credit Card'
  }

  componentDidMount () {
    if (this.props.location.state.invoice_id) {
      this.setState(
        { paid: true, room_num: this.props.location.state.room_num },
        () => {
          this.makeAxiosCall(this.props.location.state.invoice_id)
        }
      )
    } else if (this.props.location.state.res_room_id) {
      this.setState(
        {
          res_room_id: this.props.location.state.res_room_id,
          room_num: this.props.location.state.room_num
        },
        () => {
          api
            .getPreInvoice(this.state.res_room_id)
            .then(res => this.setState({ InvoiceArray: res }))
            .catch(err => console.log(err))
        }
      )
    }
  }

  makeAxiosCall = id => {
    api
      .getInvoice(id)
      .then(res => this.setState({ InvoiceArray: res }))
      .catch(err => console.log(err))
  }

  handleCheckbox = event => {
    event.target.value === 'creditCard'
      ? this.setState({
          creditCardChecked: true,
          cashChecked: false,
          payment_type: 'Credit'
        })
      : this.setState({
          creditCardChecked: false,
          cashChecked: true,
          payment_type: 'Cash'
        })
  }

  handleSubmitPayment = event => {
    event.preventDefault()
    api
      .updateRoomCheckout(
        this.state.res_room_id,
        this.state.room_num,
        this.state.payment_type
      )
      .then(res => this.setState({ paid: true, invoice_id: res[1].data }))
      .catch(err => console.log(err))
      .then(() => this.makeAxiosCall(this.state.invoice_id))
  }

  render () {
    return (
      <>
        <Header>INVOICE</Header>
        <div>
          {this.state.InvoiceArray.map(invoice => (
            <div key={invoice.res_room_id}>
              <table>
                <tbody>
                  <tr>
                    <th>Room Number:</th>
                    <th>Name:</th>
                    <th>CC Number: </th>
                    <th>Checked In Date:</th>
                    <th>Check Out Date:</th>
                    <th>Payment Type:</th>
                  </tr>
                  <tr>
                    <td>{this.state.room_num}</td>
                    <td>
                      {invoice.first_name} {invoice.last_name}
                    </td>
                    <td>****-****-****-{invoice.ccLastFour}</td>
                    <td>
                      {moment(invoice.check_in_date).format('YYYY-MM-DD')}
                    </td>
                    <td>
                      {moment(invoice.check_out_date).format('YYYY-MM-DD')}
                    </td>
                    <td>{invoice.payment_type}</td>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <th>Num Nights</th>
                    <th>Rate</th>
                    <th>Total Due</th>
                  </tr>
                  <tr>
                    <td>{invoice.num_days}</td>
                    <td>${invoice.rate}</td>
                    <td>
                      $
                      {(
                        parseInt(invoice.num_days) * parseFloat(invoice.rate)
                      ).toFixed(2)}{' '}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
        {this.state.paid ? (
          ''
        ) : (
          <div>
            <div>
              <div>
                Credit Card
                <input
                  type='checkbox'
                  value='creditCard'
                  checked={this.state.creditCardChecked}
                  onChange={this.handleCheckbox}
                />
                Cash
                <input
                  type='checkbox'
                  value='cash'
                  checked={this.state.cashChecked}
                  onChange={this.handleCheckbox}
                />
              </div>
            </div>
            <div >
              <div>
                <button
                  onClick={this.handleSubmitPayment}
                >
                  Submit Payment
                </button>
              </div>
            </div>
          </div>
        )}
        <div>
          <div>
            <Link to='/cashiering/billing'>
              Back to Billing
            </Link>
          </div>
        </div>
      </>
    )
  }
}

export default Payment
