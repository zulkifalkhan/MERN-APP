import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'

function Register() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formData


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
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type="text"
              className='form-control'
              placeholder='Enter your name'
              id='name'
              name='name'
              value={name}
              onChange={onChange}
            />
          </div>
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
          <input
              type="password"
              className='form-control'
              placeholder='Confirm password'
              id='password2'
              name='password2'
              value={password2}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register