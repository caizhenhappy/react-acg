import React, { Component } from 'react'
import { Redirect, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

function CheckoutAdmin (WrapComponent) {
  return connect(state => ({ token: state.users.token, isAdmin: state.users.user.isAdmin }), null)(
    withRouter(class extends Component {
      static displayName = `WrapComponent(${WrapComponent.displayName || WrapComponent.name || 'Component'})`
      render () {
        const { ...rest} = this.props
        const {pathname} = this.props.location
        if(!this.props.token||!this.props.isAdmin) {
          return <Redirect to='/' />
        }
        if(pathname ==='/') return <Redirect to='/' />
        return <WrapComponent {...rest}/>
      }
    }
    ))
}
export default CheckoutAdmin