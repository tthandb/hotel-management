import React from 'react'
import NumberFormat from 'react-number-format'

class UpdateReservationForm extends React.Component {
  render() {
    return (
        <div>
          <div>
            <div>
              <div>
                <form
                    method='post'
                    name='userRegistrationForm'
                    onSubmit={this.props.handleFormSubmit}
                >
                  <div>
                    <div>
                      <label>First Name</label>
                    </div>
                    <div>
                      <input
                          type='text'
                          name='firstname'
                          placeholder='First Name'
                          value={this.props.firstname}
                          onChange={this.props.handleChange}
                      />
                      <div className='text-danger'>
                        {this.props.errors.firstname}
                      </div>
                    </div>
                    <div>
                      <label>Last Name</label>
                    </div>
                    <div>
                      <input
                          type='text'
                          name='lastname'
                          placeholder='Last Name'
                          value={this.props.lastname}
                          onChange={this.props.handleChange}
                      />
                      <div className='text-danger'>{this.props.errors.lastname}</div>
                    </div>
                  </div>
                  <div>
                    <div>
                      Phone Number
                    </div>
                    <div>
                      <NumberFormat
                          format='###-###-####'
                          mask='_'
                          placeholder='Phone Number'
                          name='phone'
                          value={this.props.phone}
                          onChange={this.props.handleChange}
                      />
                      <div className='text-danger'>{this.props.errors.phone}</div>
                    </div>
                    <div>
                      Email Address
                    </div>
                    <div>
                      <input
                          type='text'
                          name='email'
                          placeholder='Email Address'
                          value={this.props.email}
                          onChange={this.props.handleChange}
                      />
                      <div className='text-danger'>{this.props.errors.email}</div>
                    </div>
                  </div>
                  <div>
                    <div>
                      Address
                    </div>
                    <div>
                      <input
                          type='text'
                          placeholder='Address'
                          name='address'
                          value={this.props.address}
                          onChange={this.props.handleChange}
                      />
                    </div>
                    <div>
                      <input
                          type='text'
                          placeholder='City'
                          name='city'
                          value={this.props.city}
                          onChange={this.props.handleChange}
                      />
                    </div>
                    <div>
                      <input
                          type='text'
                          placeholder='Country'
                          name='country'
                          value={this.props.country}
                          onChange={this.props.handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      Comments
                    </div>
                    <div>
                      <input
                          type='text'
                          placeholder='Comment'
                          name='comment'
                          value={this.props.comment}
                          onChange={this.props.handleChange}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='text-center'>
            {this.props.checkedIn === 1 || this.props.active === 0 ? (
                <button
                    type='submit'
                    className='btn btn-primary m-2'
                    onClick={this.props.handleCancelSubmit}
                    disabled
                >
                  Cancel Reservation
                </button>
            ) : (
                <button
                    type='submit'
                    className='btn btn-primary m-2'
                    onClick={this.props.handleCancelSubmit}
                >
                  Cancel Reservation
                </button>
            )}
            <button
                type='submit'
                className='btn btn-primary m-2'
                onClick={this.props.handleFormSubmit}
            >
              Submit
            </button>
            <br/>
            <span className='text-success'>
            {this.props.updateSuccess &&
            'Reservation was successfully updated!'}
          </span>
            <span className='text-success'>
            {this.props.cancelSuccess && 'Reservation has been cancelled!'}
          </span>
          </div>
        </div>
    )
  }
}

export default UpdateReservationForm
