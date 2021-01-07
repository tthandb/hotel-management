import React, { Component } from 'react'
import Header from '../components/header'
import api from '../utils/api/api'
import moment from 'moment'
import DateRange from '../components/dateRange/dateRangeOrg'
import '../assets/css/maintenance.css'
class Maintenance extends Component {
  constructor () {
    super()
    this.handleFromChange = this.handleFromChange.bind(this)
    this.handleToChange = this.handleToChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }
  state = {
    roomNumber: '',
    startDateRange: '',
    endDay: '',
    issue: '',
    newIssue: false,
    updateIssue: false,
    roomId: '',
    issueId: '',
    issuesArray: [],
    roomsArray: []
  }

  showFromMonth () {
    const { from, to } = this.state
    if (!from) {
      return
    }
    if (moment(to).diff(moment(from), 'months') < 2) {
      this.to.getDayPicker().showMonth(from)
    }
  }
  handleFromChange (startDateRange) {
    this.setState({ startDateRange })
  }
  handleToChange (endDay) {
    this.setState({ endDay }, this.showFromMonth)
  }
  handleChange (event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }
  handleUpdate (i) {
    this.setState({ startDateRange: '', endDay: '' }, () => {
      this.setState({
        updateIssue: true,
        issueId: this.state.issuesArray[i].room_issue_id,
        roomNumber: this.state.issuesArray[i].room_num,
        startDateRange: new Date(this.state.issuesArray[i].start_date),
        endDay: new Date(this.state.issuesArray[i].end_date),
        issue: this.state.issuesArray[i].issue,
        roomId: this.state.issuesArray[i].room_id
      })
    })
  }
  updateFixed (id) {
    this.clearStateIssueInfo()
    api
      .updateRoomIssuesFixed(id)
      .then(() => this.makeAxiosCall())
      .catch(err => console.log(err))
  }
  clearStateIssueInfo () {
    this.setState({
      newIssue: false,
      updateIssue: false,
      issueId: '',
      roomNumber: '',
      startDateRange: '',
      endDay: '',
      issue: '',
      roomId: ''
    })
  }
  handleCheckChange = event => {
    event.target.name === 'newIssue' &&
      this.setState({
        newIssue: !this.state.newIssue,
        startDateRange: '',
        endDay: ''
      })
    event.target.name === 'updateIssue' && this.clearStateIssueInfo()
  }
  makeAxiosCall = () => {
    api
      .getRoomIssues()
      .then(res => this.setState({ issuesArray: res }))
      .catch(err => console.log(err))
  }
  componentDidMount () {
    api
      .getRoomsIdNum()
      .then(res =>
        this.setState({ roomsArray: res })
      )
      .catch(err => console.log(err))
    this.makeAxiosCall()
  }
  handleFormSubmit = event => {
    event.preventDefault()
    let values = [
      this.state.issue,
      this.props.user.user_id,
      moment(this.state.startDateRange).format('YYYY-MM-DD'),
      moment(this.state.endDay).format('YYYY-MM-DD')
    ]
    let matchingRoom = this.state.roomsArray.filter(
      room => room.room_num === this.state.roomNumber
    )
    if (matchingRoom.length === 1) {
      values.unshift(matchingRoom[0].room_id)
      if (this.state.newIssue) {
        api
          .createRoomIssue(values)
          .then(() => this.makeAxiosCall())
          .catch(err => console.log(err))
          .then(() => this.clearStateIssueInfo())
      } else if (this.state.updateIssue) {
        api
          .updateRoomIssues(this.state.issueId, values)
          .then(() => this.makeAxiosCall())
          .catch(err => console.log(err))
          .then(() => this.clearStateIssueInfo())
      }
    }
  }

  render () {
    return (
      <>
        <Header title='MAINTENANCE'/>
        <div className='maintenance-container'>
          <div>
            <div>
              <strong>
                {this.state.updateIssue
                  ? 'Update Selected Issue'
                  : 'Add New Work Order'}
              </strong>
            </div>
            <div>
              <input
                type='checkbox'
                name={this.state.updateIssue ? 'updateIssue' : 'newIssue'}
                checked={
                  this.state.updateIssue
                    ? this.state.updateIssue
                    : this.state.newIssue
                }
                onChange={this.handleCheckChange}
              />
            </div>
          </div>
          {(this.state.newIssue || this.state.updateIssue) && (
            <div>
              <div>
                <div>
                  <div>
                    Room Number
                  </div>
                  <div>
                    <input
                      onChange={this.handleChange}
                      name='roomNumber'
                      placeholder='Room Number'
                      value={this.state.roomNumber}
                    />
                  </div>
                </div>
                <div>
                  <div>
                    Date
                  </div>
                  <div>
                    <DateRange
                      handleFromChange={this.handleFromChange}
                      handleToChange={this.handleToChange}
                      from={this.state.startDateRange}
                      to={this.state.endDay}
                    />
                  </div>
                </div>
                <div>
                  <div>
                    Problem
                  </div>
                  <div>
                    <textarea type='text' name='issue' value={this.state.issue} onChange={this.handleChange} />
                  </div>
                  <div></div>
                  <div>
                    <button
                      type='button'
                      onClick={this.handleFormSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div>
            <div>
              <table>
                <tbody>
                  <tr>
                    <th>Room Number</th>
                    <th>Room Type</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Problem</th>
                    <th></th>
                    <th></th>
                  </tr>
                  {this.state.issuesArray.map((issue, i) => (
                    <tr key={issue.room_issue_id}>
                      <td>{issue.room_num}</td>
                      <td>{issue.type}</td>
                      <td>{moment(issue.start_date).format('YYYY-MM-DD')}</td>
                      <td>{moment(issue.end_date).format('YYYY-MM-DD')}</td>
                      <td>{issue.issue}</td>
                      <td>
                        <button
                          type='button'
                          name='issueId'
                          onClick={() => this.handleUpdate(i)}
                        >
                          Update
                        </button>
                      </td>
                      <td>
                        <button
                          type='button'
                          onClick={() => this.updateFixed(issue.room_issue_id)}
                        >
                          Fixed
                        </button>
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

export default Maintenance
