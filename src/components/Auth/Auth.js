import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'

import './Auth.css'
import StorefrontIcon from '@mui/icons-material/Storefront'

function Auth({ authType, pageTitle }) {

  const navigate = useNavigate()

  const [authValue, setAuthValue] = useState(authType)
  const [errMsg, setErrMsg] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = e => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
        navigate('/')
      })
      .catch(err => console.error(err.message))
  }

  const register = e => {
    e.preventDefault()

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
        if (userCredential) {
          navigate('/')
        }
      })
      .catch(err => console.error(err.message))
  }

  return (
    <main className='auth'>
      <Link to='/' className='auth__logoLink'>
        <div className='auth__logo'>
          <StorefrontIcon className='auth__logoIcon' fontSize='large'/>
          <span className="auth__logoText">J@S eSHOP</span>
        </div>
      </Link>
      <section className='auth__container'>
        <h1>{ pageTitle }</h1>
        <form>
          <label htmlFor='email'>E-mail</label>
          <input type='text' aria-labelledby='email' value={email} onChange={e => setEmail(e.target.value)}/>
          <label htmlFor='password'>Password</label>
          <input type='password' aria-labelledby='password' value={password} onChange={e => setPassword(e.target.value)}/>
          { authValue === 'login' ? 
            <button type='submit' className='auth__signInBtn' onClick={signIn}>Sign In</button>
            :
            <button type='submit' className='auth__signInBtn' onClick={register}>Sign Up</button>
          }
        </form>
        <p>
          By signing-in you agree to the eShop Website Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <p>
          *This is a sample eShop project meant to show use of React.js methods. Not meant for actual sale of actual items.
        </p>
        { authValue === 'login' ?
          <Link to='/signup' className='auth__registerBtn btn'>
            Create Your eShop Account
          </Link>
          :
          <Link to='/login' className='auth__registerBtn btn'>
            Log In
          </Link>
        }
        
      </section>
    </main>
  )
}

export default Auth