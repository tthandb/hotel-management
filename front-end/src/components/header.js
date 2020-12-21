import {Link} from "react-router-dom";
import React from "react";

class Header extends React.Component {
  render() {
    return (
        <div>
          <Link title='Return to Dashboard' to='/'>
            <h3>Go back</h3>
          </Link>
          <h1>{this.props.title}</h1>
        </div>
    )
  }
}

export default Header