import React, { Component } from 'react'
import FRinput from './FRinput'
class FRParentinput extends Component {

    constructor(props) {
      super(props)
      this.inputref = React.createRef()
    }

    inputRefcall = ()=>{
        this.inputref.current.focus()
    }
    
  render() {
    return (
      <div>
        <FRinput ref={this.inputref}></FRinput>
        <button onClick={this.inputRefcall}>submit</button>
      </div>
    )
  }
}

export default FRParentinput
