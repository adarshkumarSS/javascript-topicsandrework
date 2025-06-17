import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {username => {
            return <h1>hey {username}</h1>
        }}
      </UserConsumer>
    )
  }
}

export default ComponentF
