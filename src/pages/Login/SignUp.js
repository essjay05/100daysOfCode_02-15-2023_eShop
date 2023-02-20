import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'

import './SignUp.css'
import StorefrontIcon from '@mui/icons-material/Storefront'


function SignUp() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const register = e => {
    e.preventDefault()

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
        if (userCredential) {
          navigate.push('/')
        }
      })
      .catch(err => console.error(err.message))
  }

  return (
    <main className='signup'>
      <Link to='/' className='signup__logoLink'>
        <div className='signup__logo'>
          <StorefrontIcon className='signup__logoIcon' fontSize='large'/>
          <span className="signup__logoText">J@S eSHOP</span>
        </div>
      </Link>
      <section className='signup__container'>
        <h1>Sign-in</h1>
        <form>
          <label for='email'>E-mail</label>
          <input type='text' aria-labelledby='email' value={email} onChange={e => setEmail(e.target.value)}/>
          <label for='password'>Password</label>
          <input type='password' aria-labelledby='password' value={password} onChange={e => setPassword(e.target.value)}/>
          <button type='submit' className='signup__signUpBtn' onClick={register}>Sign In</button>
        </form>
        <p>
          By signing-in you agree to the eShop Website Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <p>
          *This is a sample eShop project meant to show use of React.js methods. Not meant for actual sale of actual items.
        </p>
      </section>
    </main>
  )
}

export default SignUp