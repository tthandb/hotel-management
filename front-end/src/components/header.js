import {Link} from "react-router-dom";
import React from "react";
import {UserContext} from "../userContext";

class Header extends React.Component {
  render() {
    return (
        <UserContext.Consumer>
          {({user, getUserLogout}) => (
              <div>
                <div>
                  <Link title='Return to Dashboard' to='/'>
                    Go back
                  </Link>
                </div>
                <div>
                  <h1>{this.props.title}</h1>
                </div>
                <div>{user.username}</div>
                <div>
                  <button onClick={getUserLogout}>
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
