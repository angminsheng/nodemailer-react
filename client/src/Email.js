import React, { Component } from 'react'
import axios from 'axios'

export default class Email extends Component {
  state = {
    email: '',
    subject: '',
    message: ''
  }

  handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    console.log(name, value);
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let emailObj = {
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    }

    axios.post('http://localhost:5000/send-email', emailObj).then(() => { console.log("done") })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="">email</label>
            <input type="text" name="email" onChange={(e) => this.handleChange(e)} />
          </div>
          <div>
            <label htmlFor="">subject</label>
            <input type="text" name="subject" onChange={(e) => this.handleChange(e)} />
          </div>
          <div>
            <label htmlFor="">message</label>
            <textarea name="message" id="" cols="30" rows="10" onChange={(e) => this.handleChange(e)}></textarea>
          </div>
          <button>submit</button>
        </form>
      </div>
    )
  }
}
