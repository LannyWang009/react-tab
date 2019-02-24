// type rcc
import React, { Component } from 'react'

class LoremIpsum extends Component {
  // type rconst for shortcut
  constructor (props) {
    super(props)
    this.state = {
      numberOfParagraphs: 0
    }
  }

  increment () {
    this.setState({ numberOfParagraphs: this.state.numberOfParagraphs + 1 })
  }

  decrement () {
    if (this.state.numberOfParagraphs === 0) return
    this.setState({ numberOfParagraphs: this.state.numberOfParagraphs - 1 })
  }
  render () {
    return (
      <section className='conent'>
        <h1 className='title'>Number of LI paragraphs: {this.state.numberOfParagraphs}</h1>
        <div className='buttons'>
          <button className='button is-info is-medium'
            onClick={() => this.increment()}>Add a paragraph </button>
          <button className='button is-info is-medium'
            onClick={() => this.decrement()}>
            Remove a paragraph</button>
        </div>
        {[...Array(this.state.numberOfParagraphs)].map((element, index) => <p key={index}>{loremText}</p>)}
      </section>
    )
  }
}
const loremText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus at magna sit amet tristique. Suspendisse ut varius dui, tincidunt semper sapien. Nullam bibendum eros lectus, eu posuere velit ultrices sed. Proin consectetur lacus nec metus ullamcorper, ac tempus felis eleifend. Donec eu euismod nisl. Morbi fringilla justo sit amet blandit dictum. Fusce sollicitudin ipsum ut mauris posuere pharetra. Praesent vitae elit nec ex placerat faucibus a in diam. Sed bibendum sit amet dui at facilisis. Vivamus vitae felis lacinia, gravida lectus id, placerat ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer feugiat, sem in interdum tempor, nisi enim mollis nibh, luctus laoreet massa ligula nec ex.'
export default LoremIpsum
