import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {UserContext} from '../userContext'

export const PrivateAccessRoute = ({ component: Component, accessId, ...otherOptions }) => (
  <UserContext.Consumer>
    {({ user }) => (
      <Route
        {...otherOptions}
        render={props =>
          user.access_id >= accessId ? (
            <Component {...props} user={user} />
          ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: props.location }
              }}
            />
          )
        }
      />
    )}
  </UserContext.Consumer>
)
