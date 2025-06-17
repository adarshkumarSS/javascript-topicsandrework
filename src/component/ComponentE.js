import React, { Component } from 'react'
import ComponentF from './ComponentF'
import usercontext from './userContext'

class ComponentE extends Component {
  render() {
    return (
      <div>
        <h1>this is {this.context}</h1>
        <ComponentF></ComponentF>
      </div>
    )
  }
}

ComponentE.contextType = usercontext
export default ComponentE
