import React, { Component } from 'react'
import '../style/App.css'
import Tabs from './Tabs'
import HelloReact from './HelloReact'
import LoremIpsum from './LoremIpsum'
import LogIn from './Login'
import Yummy from './Yummy'

class App extends Component {
  constructor (props) {
    // rconst
    // we manage the state inside app, because we want tabs to not to care about any interaction
    super(props)

    this.state = {
      activeTab: 0
    }
  }
  // this function will change active tab
  changeTab (newTab) {
    this.setState({ activeTab: newTab }) // this modifies the state only changes the keys there
  }

  render () {
    // this.props always refer to the property of this class
    // let { activeTab, changeTab } = this.props
    // const activeTab = this.props.activeTab
    this.changeTab = this.changeTab.bind(this)
    return (
      <section className='section'>
        <div className='container'>
          <Tabs activeTab={this.state.activeTab}
            changeTab={this.changeTab} />
          <br />
          {this.state.activeTab === 0 ? <HelloReact /> : null}
          {this.state.activeTab === 1 ? <LoremIpsum /> : null}
          {this.state.activeTab === 2 ? <LogIn /> : null}
          {this.state.activeTab === 3 ? <Yummy /> : null}
        </div>
      </section>

    )
  }
}

export default App
