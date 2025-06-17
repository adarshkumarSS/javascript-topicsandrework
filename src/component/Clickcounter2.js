import React, { Component } from 'react'

class Clickcounter2 extends Component {
    
  render() {
    const {count,incrementCount}=this.props
    return (
      <div>
        <button onClick={incrementCount}>you clicked {count} times</button>
      </div>
    )
  }
}

export default Clickcounter2
