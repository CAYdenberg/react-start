import React from 'react'

import Controls from './Controls'

class Presentation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      slide: 0
    }

    this.prevSlide = this._prevSlide.bind(this)
    this.nextSlide = this._nextSlide.bind(this)
  }

  _prevSlide() {
    this.setState( state => ({slide: state.slide - 1}) )
  }

  _nextSlide() {
    this.setState( state => ({slide: state.slide + 1}) )
  }

  render() {
    return (
      <article className="container content">

        {React.Children.toArray(this.props.children)[this.state.slide]}

        <Controls prevSlide={this.prevSlide} nextSlide={this.nextSlide} />
      </article>
    )
  }
}

export default Presentation
