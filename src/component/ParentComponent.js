import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentname : 'parent'
      }
      this.greetParent = this.greetParent.bind(this)
    }
    
    greetParent(childname){
        alert(`Hello ${this.state.parentname} from ${childname}`)
    }
    
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}></ChildComponent>
      </div>
    )
  }
}

export default ParentComponent
