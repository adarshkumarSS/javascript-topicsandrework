import React, { Component } from 'react'

class Refsdemo extends Component {

    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
      this.cbRef = null
      this.setCbref = (element) => {
        this.cbRef = element
      }
    }
    componentDidMount(){
        this.cbRef.focus()
        // this.inputRef.current.focus()
    }
    
    onclickrender = () => {
        alert(this.inputRef.current.value)
    }

  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}></input>
        <input type='text' ref={this.setCbref}></input>
        <button onClick={this.onclickrender}>Click</button>
      </div>
    )
  }
}

export default Refsdemo
