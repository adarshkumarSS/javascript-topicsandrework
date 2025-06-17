import React from 'react'
import ReactDOM from 'react-dom'

function Portaldemo() {
  return ReactDOM.createPortal (
    <h1>Cartoon Network</h1>, document.getElementById('portal-root')
  )
}

export default Portaldemo
