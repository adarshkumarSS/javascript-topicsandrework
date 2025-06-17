import React, { Component } from 'react'

class Hovercounter2 extends Component {

  render() {
    const {count, incrementCount} = this.props
    return (
      <div>
        <h1 onMouseOver={incrementCount}>you hovered {count} times</h1>
      </div>
    )
  }
}

export default Hovercounter2
