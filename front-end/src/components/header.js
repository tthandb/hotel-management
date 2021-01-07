import {Link} from "react-router-dom";
import React from "react";
import {UserContext} from "../userContext";
import '../assets/css/header.css'

class Header extends React.Component {
  render() {
    return (
        <UserContext.Consumer>
          {({user, getUserLogout}) => (
              <div className='header-container'>
                <div className='header-left'>
                  <Link title='Return to Dashboard' to='/'>
                    <button>
                    Back
                    </button>
                  </Link>
                  <h1>{this.props.title}</h1>
                </div>
                <div className='header-right'>
                  <div className='header-username'>{user.username}</div>
                  <button className='logout-btn' onClick={getUserLogout}>
                    Logout
                  </button>
                </div>


              </div>
          )}
        </UserContext.Consumer>
    )
  }
}

export default Header
