import React from 'react'

function FunctionClick() {
  function eventHandler(){
    console.log("hey you clicked the button")
  }
    return (
    <div>
      <button onClick = {eventHandler}>Click</button>
    </div>
  )
}

export default FunctionClick
