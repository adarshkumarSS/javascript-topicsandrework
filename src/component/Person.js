import React from 'react'

function Person({person}) {
  return (
    <div>
      <h1>I'm {person.name} and my ID is {person.id}</h1>
    </div>
  )
}

export default Person
