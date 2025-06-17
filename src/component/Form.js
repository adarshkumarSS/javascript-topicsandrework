import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username : '',
         comments : '',
         topic : 'react',
      }
    }

    onchangeusername = (event) => {
        this.setState({
            username : event.target.value,
        })
    }
    onchangecomment = (event) => {
        this.setState({
            comments : event.target.value,
        })
    }

    onchangetopic = (event) => {
        this.setState({
            topic : event.target.value,
        })
        event.preventDefault();
    }

    onsubmitchange = event => {
        alert(` username : ${this.state.username}\n message : ${this.state.comments}\n topic : ${this.state.topic}`)
    }
    
  render() {
    return (
      <div>
        <form onSubmit={this.onsubmitchange}> 
            <div>
                <label>Username :</label>
                <input type='text' 
                value={this.state.username} 
                onChange={this.onchangeusername}></input>
            </div>
            <div>
                <label>Comment :</label>
                <textarea type='text'
                value = {this.state.comments}
                onChange = {this.onchangecomment}></textarea>
            </div>
            <div>
                <label>Topics</label>
                <select value={this.state.value} onChange={this.onchangetopic}>React
                    <option value='react'>React</option>
                    <option value='angular'>Angular</option>
                    <option value='vue'>Vue</option>
                </select>
            </div>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
