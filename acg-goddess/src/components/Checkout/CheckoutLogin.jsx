import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

function CheckoutLogin (WrapComponent) {
  return connect(state => ({ token: state.users.token }), null)(
    withRouter(class extends Component {
      static displayName = `WrapComponent(${WrapComponent.displayName || WrapComponent.name || 'Component'})`
      render () {
        const { ...rest } = this.props
        const { pathname } = this.props.location

        //去login判断
        if (pathname === "/login" && this.props.token) return <Redirect to='/' />
        if (pathname === "/register" && this.props.token) return <Redirect to='/' />
        return <WrapComponent {...rest} />
      }
    }
    ))
}
export default CheckoutLogin