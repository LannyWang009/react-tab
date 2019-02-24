import React, { Component } from 'react'
import Success from './Success'

export default class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      showAlert: false,
      alertMessage: '',
      success: false
    }
  }

  handleChangeUsername (e) {
    console.log('username event', e.target.value)
    this.setState({ username: e.target.value })
  }

  handleChangePassword (e) {
    console.log('password event', e.target.value)
    this.setState({ password: e.target.value })
  }

  handleSubmit (e) {
    e.preventDefault()
    if (!this.state.username) {
      this.setState({ showAlert: true, alertMessage: 'Please enter a username.' })
    } else if (!this.state.password) {
      this.setState({ showAlert: true, alertMessage: 'Please enter a password.' })
    } else {
      this.clearAlert()
      this.setState({ success: true })
    }
  }

  clearAlert () {
    this.setState({ showAlert: false, alertMessage: '' })
  }

  resetForm () {
    this.clearAlert()
    this.setState({ username: '', password: '', success: false })
  }

  render () {
    return (
      <section className='content'>
        <div style={{ height: '40px' }} />
        <div className='columns is-centered'>
          <div className='column is-half'>
            {this.state.success ? <Success reset={() => this.resetForm()} /> : <div className='box'>
              <h1 className='title'>Login</h1>
              {this.state.showAlert
                ? <div className='notification is-danger'>
                  <button className='delete' />
                  {this.state.alertMessage}
                </div> : null}
              <form onSubmit={(e) => this.handleSubmit(e)}>
                <div className='field'>
                  <label className='label'>Username</label>
                  <div className='control'>
                    <input placeholder='Username' type='text' id='usernameInput'
                      className='input is-medium' value={this.state.username}
                      onChange={(e) => this.handleChangeUsername(e)} />
                  </div>
                </div>
                <div className='field'>
                  <label className='label'>Password</label>
                  <div className='control'>
                    <input placeholder='Password' type='password'
                      className='input is-medium' value={this.state.password}
                      onChange={(e) => this.handleChangePassword(e)} />
                  </div>
                </div>
                <div className='field'>
                  <div className='control'>
                    <button className='button is-primary is-medium' type='submit'>
                    Login
                    </button>
                  </div>
                </div>
              </form>
            </div>}
          </div>
        </div>
      </section>
    )
  }
}
