import React, {Component} from 'react'
import {UserContext} from "../userContext";
import '../assets/css/login.css'

class Login extends Component {
  constructor() {
    super()
    this.handleInputChange = event => {
      const {name, value} = event.target
      this.setState({[name]: value})
    }
    this.handleSubmit = event => {
      event.preventDefault()
      if (!this.isFormInValid()) {
        this.context.postUserLogin({
          username: this.state.username,
          password: this.state.password
        })
      }
    }
    this.state = {
      username: 'user',
      password: '123123'
    }
  }

  isFormInValid() {
    return this.state.username.length < 4 || this.state.password.length < 5;
  }

  render() {
    return (
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className="login-container">
            <h2 className="login-title">Login</h2>
            <input
                className="username"
                type="text"
                placeholder="Enter Username"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
                required/>
            <input
                className="password"
                type="password"
                placeholder="Enter Password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                required/>
            <button className="login-btn" type="submit" disabled={this.isFormInValid()}>Login</button>
          </div>
        </form>

    )
  }
}

Login.contextType = UserContext
export default Login
