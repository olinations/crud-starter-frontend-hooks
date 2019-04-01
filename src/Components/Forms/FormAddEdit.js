import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function AddEditForm(props) {
  const[form, setValues] = useState({
    id: 0,
    first: '',
    last: '',
    email: '',
    phone: '',
    location: '',
    hobby: ''
  })

  const onChange = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const submitFormAdd = e => {
    e.preventDefault()
    fetch('http://localhost:3000/crud', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first: form.first,
        last: form.last,
        email: form.email,
        phone: form.phone,
        location: form.location,
        hobby: form.hobby
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          props.addItemToState(item[0])
          props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  const submitFormEdit = e => {
    e.preventDefault()
    fetch('http://localhost:3000/crud', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: form.id,
        first: form.first,
        last: form.last,
        email: form.email,
        phone: form.phone,
        location: form.location,
        hobby: form.hobby
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          // console.log(item[0])
          props.updateState(item[0])
          props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    if(props.item){
      const { id, first, last, email, phone, location, hobby } = props.item
      setValues({ id, first, last, email, phone, location, hobby })
    }
  }, false)

  return (
    <Form onSubmit={props.item ? submitFormEdit : submitFormAdd}>
      <FormGroup>
        <Label for="first">First Name</Label>
        <Input type="text" name="first" id="first" onChange={onChange} value={form.first === null ? '' : form.first} />
      </FormGroup>
      <FormGroup>
        <Label for="last">Last Name</Label>
        <Input type="text" name="last" id="last" onChange={onChange} value={form.last === null ? '' : form.last}  />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" onChange={onChange} value={form.email === null ? '' : form.email}  />
      </FormGroup>
      <FormGroup>
        <Label for="phone">Phone</Label>
        <Input type="text" name="phone" id="phone" onChange={onChange} value={form.phone === null ? '' : form.phone}  placeholder="ex. 555-555-5555" />
      </FormGroup>
      <FormGroup>
        <Label for="location">Location</Label>
        <Input type="text" name="location" id="location" onChange={onChange} value={form.location === null ? '' : form.location}  placeholder="City, State" />
      </FormGroup>
      <FormGroup>
        <Label for="hobby">Hobby</Label>
        <Input type="text" name="hobby" id="hobby" onChange={onChange} value={form.hobby}  />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  )
}

export default AddEditForm