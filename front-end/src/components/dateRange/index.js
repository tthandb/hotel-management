import React from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import { formatDate, parseDate } from 'react-day-picker/moment'
import '../../assets/css/dateRange.css'
export default class DateRange extends React.Component {
  render() {
    const { from, to } = this.props
    const modifiers = { start: from, end: to }

    return (
      <div className='date-range2-container'>
        <div className='day-picker-input'>
          <label htmlFor='arrival-input'>
            Arrival
                </label>
          <DayPickerInput
            render={props =>

              <input {...props} />}
            value={from}
            inputProps={{ id: 'arrival-input', className: 'form-control-lg' }}
            placeholder='From'
            format='YYYY-MM-DD'
            formatDate={formatDate}
            parseDate={parseDate}
            dayPickerProps={{
              selectedDays: [from, { from, to }],
              disabledDays: { before: new Date(), after: to },
              toMonth: to,
              modifiers,
              numberOfMonths: 2,
              onDayClick: () => this.to.getInput().focus()
            }}
            onDayChange={this.props.handleFromChange}
          />
        </div>
        <form>
          <label htmlFor='departure-input'>
            Departure
            </label>
          <DayPickerInput
            ref={el => (this.to = el)}
            value={to}
            inputProps={{
              id: 'departure-input',
              className: 'form-control-lg'
            }}
            placeholder='To'
            format='YYYY-MM-DD'
            formatDate={formatDate}
            parseDate={parseDate}
            dayPickerProps={{
              selectedDays: [from, { from, to }],
              disabledDays: { before: from },
              modifiers,
              month: from,
              fromMonth: from,
              numberOfMonths: 2
            }}
            onDayChange={this.props.handleToChange}
          />
        </form>
      </div>
    )
  }
}
