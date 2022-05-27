import { useState, useEffect } from 'react'
import {  FaSignInAlt } from 'react-icons/fa'

function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password} = formData


  const onChange = (e) => {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }

  const onSubmit = (e)=>{
    e.preventDefault()
  }

  return (
    <>
      <section className='heading'>
        <h1>
          < FaSignInAlt /> Login
        </h1>
        <p>Please Sign in</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type="email"
              className='form-control'
              placeholder='Enter your email'
              id='email'
              name='email'
              value={email}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type="password"
              className='form-control'
              placeholder='Enter password'
              id='password'
              name='password'
              value={password}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>Sign in</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login