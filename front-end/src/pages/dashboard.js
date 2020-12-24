import React from 'react'
import {Link} from 'react-router-dom'

class Dashboard extends React.Component {
  render() {
    return (
        <>
          <ul>
            <p>Reservation</p>
            <li>
              <Link to='reserve/new'>
                New reservation
              </Link>
            </li>
          </ul>
        </>
    )
  }
}

export default Dashboard

