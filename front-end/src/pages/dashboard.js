import React from 'react'
import {Link} from 'react-router-dom'
import Header from "../components/header";

class Dashboard extends React.Component {
  render() {
    return (
        <>
          <Header title="DASHBOARD"/>
          <ul>
            <div>
              <div>
                RESERVATION
              </div>
              <div>
                <Link to='/reserve/new'>
                  <h4>
                    New Reservation
                  </h4>
                </Link>
              </div>
              <div>
                <Link to='/reserve/allreservations'>
                  <h4>All Reservations</h4>
                </Link>
              </div>
            </div>
            <div>
              <div>
                <div>
                  FRONT DESK
                </div>
                <div>
                  <Link to='/frontdesk/arrivals'>
                    <h4>Arrivals</h4>
                  </Link>
                </div>
                <div>
                  <Link to='/frontdesk/inhouse'>
                    <h4>In-House Guests</h4>
                  </Link>
                </div>
                <div>
                  <Link to='/frontdesk/maintenance'>
                    <h4>Maintenance</h4>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  FINANCE
                </div>
                <div>
                  <Link to='/cashiering/billing'>
                    <h4>Billing</h4>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  REPORTS
                </div>
                <div>
                  <Link to='/reports/housekeeping'>
                    <h4>Housekeeping Report</h4>
                  </Link>
                </div>
                <div>
                  <Link to='/reports/houseStatus'>
                    <h4>House Status</h4>
                  </Link>
                </div>
              </div>
            </div>
          </ul>
        </>
    )
  }
}

export default Dashboard

