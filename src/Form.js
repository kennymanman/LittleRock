import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class FormExampleSubcomponentControl extends Component {
  state = {}

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => this.setState({ email: '', name: '' })

  render() {
    const { name, value, email } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input fluid label='First name' placeholder='First name' value={name} onChange={this.handleChange} />
          <Form.Input fluid label='Last name' placeholder='Last name' value={name} onChange={this.handleChange} />
        
        </Form.Group>
        
        <Form.Input label='Email' placeholder='james@gmail.com'  value={email} onChange={this.handleChange} />
        <Form.TextArea label='About' placeholder='Your message...' value={name}  onChange={this.handleChange} />
        
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default FormExampleSubcomponentControl