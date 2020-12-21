import React from 'react'
import NumberFormat from 'react-number-format'

class RegistrationForm extends React.Component {
  render() {
    return (
        <form>
          <div className='form-group'>
            <label htmlFor='first-name-input'>First Name</label>
            <input
                className='form-control'
                type='text'
                name='firstname'
                id='first-name-input'
                placeholder='First Name'
                value={this.props.firstname}
                onChange={this.props.handleChange}
            />
            <div className='text-danger'>{this.props.errors.firstname}</div>
          </div>
          <div className='form-group'>
            <label htmlFor='last-name-input'>Last Name</label>
            <input
                className='form-control'
                type='text'
                name='lastname'
                id='last-name-input'
                placeholder='Last Name'
                value={this.props.lastname}
                onChange={this.props.handleChange}
            />
            <div className='text-danger'>{this.props.errors.lastname}</div>
          </div>
          <div className='form-group'>
            <label htmlFor='phone-input'>Phone Number</label>
            <NumberFormat
                className='form-control'
                format='###-###-####'
                mask='_'
                placeholder='Phone Number'
                name='phone'
                id='phone-input'
                value={this.props.phone}
                onChange={this.props.handleChange}
            />
            <div className='text-danger'>{this.props.errors.phone}</div>
          </div>
          <div className='form-group'>
            <label htmlFor='email-input'>Email Address</label>
            <input
                className='form-control'
                type='text'
                name='email'
                id='email-input'
                placeholder='Email Address'
                value={this.props.email}
                onChange={this.props.handleChange}
            />
            <div className='text-danger'>{this.props.errors.email}</div>
          </div>
          <div className='form-group'>
            <label htmlFor='address-input'>Address</label>
            <input
                className='form-control'
                type='text'
                placeholder='Street Address'
                name='address'
                id='address-input'
                value={this.props.address}
                onChange={this.props.handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='city-input'>City</label>
            <input
                className='form-control'
                type='text'
                placeholder='City'
                name='city'
                id='city-input'
                value={this.props.city}
                onChange={this.props.handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='state-input'>Country</label>

            <input
                className='form-control'
                type='text'
                placeholder='Country'
                name='country'
                id='country-input'
                value={this.props.country}
                onChange={this.props.handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='room-comments'>Comments</label>
            <textarea
                className='form-control'
                type='text'
                name='room_comments'
                id='room-comments'
                value={this.props.comments}
                onChange={this.props.handleChange}
            />
          </div>
          <button
              type='submit'
              className='btn text-center btn-primary'
              onClick={this.props.handleFormSubmit}
          >
            Submit
          </button>
        </form>
    )
  }
}

export default RegistrationForm
