import React, { Component } from 'react'

export default class Yummy extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
  }

  render () {
    return (
      <div>
        <section className='content'>
          <h1 className='title'>List of Fun People</h1>
          <div className='box'>
            <form>
              <div className='field'>
                <label className='label'>Name</label>
                <div className='control'>
                  <input type='text' id='nameInput' className='input is-medium' value='' />
                </div>
              </div>
              <div className='field'>
                <label className='label'>Reason they are fun</label>
                <div className='control'>
                  <input type='text' className='input is-medium' value='' />
                </div>
              </div>
              <div className='field'>
                <input type='submit' className='button is-link is-medium is-disabled' disabled='' value='Add Fun Person' />
              </div>
            </form>
          </div>
        </section>
      </div>
    )
  }
}

// yummy page has a form that asks for input on yummy restaurants
