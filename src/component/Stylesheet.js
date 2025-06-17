import React from 'react'
import './Stylesheet.css'

function Stylesheet(props) {
    const class_color = props?'primary':''
    return (
    <div>
      <h1 className={`${class_color} font-xl`}>Stylesheet</h1>
    </div>
  )
}

export default Stylesheet
