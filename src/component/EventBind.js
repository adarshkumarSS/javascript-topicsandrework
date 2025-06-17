import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message:'guest'
      }

      this.changemessage = this.changemessage.bind(this)
    }

    // changemessage(){
    //     this.setState({
    //         message:'adarsh'
    //     })
    // }

    changemessage = () => {
        this.setState({
            message:'adarsh'
        })
    }
    
  render() {
    return (
      <div>
        <h1>Hello {this.state.message}</h1>
        {/* <button onClick={this.changemessage.bind(this)}>Click</button> -this binding method*/}
        {/* <button onClick={ () => this.changemessage()}>Click</button> */}
        <button onClick={this.changemessage}>Click</button>
      </div>
    )
  }
}

export default EventBind
