import React, { Component } from 'react'
import Successrestaurant from './Successrestaurant'
// import Successrestaurant from './Successrestaurant'

export default class Yummy extends Component {
  constructor (props) {
    super(props)

    this.state = {
      restaurantName: '',
      restaurantAddr: '',
      restaurantDish: '',
      showAlert: false,
      alertMessage: '',
      success: false,
      listOfRecommendation: []
    }
  }

  handleChangeRestaurantname (e) {
    console.log('restaurant name event', e.target.value)
    this.setState({ restaurantName: e.target.value })
  }

  handleChangeRestaurantAddr (e) {
    console.log('restaurant address event', e.target.value)
    this.setState({
      restaurantAddr: e.target.value
    })
  }

  handleChangeRestaurantDish (e) {
    console.log('restaurant dish event', e.target.value)
    this.setState({
      restaurantDish: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    if (!this.state.restaurantName) {
      this.setState({ showAlert: true, alertMessage: 'Please enter a restaurant name.' })
    } else if (!this.state.restaurantAddr) {
      this.setState({ showAlert: true, alertMessage: 'Please enter a restaurant address.' })
    } else if (!this.state.restaurantDish) {
      this.setState({ showAlert: true, alertMessage: 'Please enter dishes you like.' })
    } else {
      this.clearAlert()
      this.setState({ restaurantName: '', restaurantAddr: '', restaurantDish: '', success: false })
    }
  }

  clearAlert () {
    this.setState({ showAlert: false, alertMessage: '' })
  }

  resetForm () {
    this.clearAlert()
    this.setState({
      restaurantName: '',
      restaurantAddr: '',
      restaurantDish: '',
      success: false
    })
  }

  render () {
    return (
      <div>
        <section className='content'>
          <h1 className='title'>List of Recommended Chinese Restaurants in Houston</h1>
          <div className='box'>
            {this.state.success ? <Successrestaurant reset={() => this.resetForm()} /> : <div className='box'>
              <h1 className='title'>Login</h1>
              {this.state.showAlert
                ? <div className='notification is-danger'>
                  <button className='delete' />
                  {this.state.alertMessage}
                </div> : null}
              <form onSubmit={(e) => this.handleSubmit(e)}>
                <div className='field'>
                  <label className='label'>Restaurant Name</label>
                  <div className='control'>
                    <input type='text' id='restaurantnameInput' onChange={(e) => this.handleChangeRestaurantname(e)} className='input is-medium' value={this.state.restaurantName} />
                  </div>
                </div>
                <div className='field'>
                  <label className='label'>Address</label>
                  <div className='control'>
                    <input type='text' id='restaurantaddrInput' onChange={(e) => this.handleChangeRestaurantAddr(e)} className='input is-medium' value={this.state.restaurantAddr} />
                  </div>
                </div>
                <div className='field'>
                  <label className='label'>Good Dishes</label>
                  <div className='control'>
                    <input type='text' id='restaurantdishInput' onChange={(e) => this.handleChangeRestaurantDish(e)} className='input is-medium' value={this.state.restaurantDish} />
                  </div>
                </div>
                <div className='field'>
                  <input type='submit' className='button is-link is-medium is-disabled' disabled='' value='Add!' />
                </div>
              </form>
            </div>}
          </div>
        </section>
      </div>
    )
  }
}

// yummy page has a form that asks for input on yummy restaurants
