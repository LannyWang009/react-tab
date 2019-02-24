import React, { Component } from 'react'
import Tab from './Tab'
export default class Tabs extends Component {
  render () {
    let { activeTab, changeTab } = this.props
    return (
      <div>
        <div className='tabs is-boxed is-medium'>
          <ul>
            <Tab label='Hello React'
              isActive={activeTab === 0}
              handleClick={() => changeTab(0)} />
            <Tab label='Lorem ipsem'
              handleClick={() => changeTab(1)}
              isActive={activeTab === 1} />
            <Tab label='Log In'
              handleClick={() => changeTab(2)}
              isActive={activeTab === 2} />
            <Tab label='Yummy Food'
              handleClick={() => changeTab(3)}
              isActive={activeTab === 3} />
          </ul>
        </div>
      </div>
    )
  }
}
