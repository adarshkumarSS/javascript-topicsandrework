import React, { Component } from 'react'
import Input from './input'

class Focusinput extends Component {
    constructor(props) {
      super(props)
    
      this.focuscomponent = React.createRef()
    }

    onclickhandler = () =>{
        this.focuscomponent.current.focusinput()
    }
    
  render() {
    return (
      <div>
        <Input ref={this.focuscomponent}></Input>
        <button onClick={this.onclickhandler}>Focus input</button>
      </div>
    )
  }
}

export default Focusinput
