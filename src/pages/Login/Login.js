import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'

import './Login.css'
import StorefrontIcon from '@mui/icons-material/Storefront'

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')

  const signIn = e => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
        navigate('/')
      })
      .catch(err => {
        console.error(err.message)
        setErrMsg(err.message)
      })
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
      .catch(err => {
        console.error(err.message)
        setErrMsg(err.message)
      })
  }

  return (
    <main className='login'>
      <Link to='/' className='login__logoLink'>
        <div className='login__logo'>
          <StorefrontIcon className='login__logoIcon' fontSize='large'/>
          <span className="login__logoText">J@S eSHOP</span>
        </div>
      </Link>
      <section className='login__container'>
        <h1>Sign-in</h1>
        <form>
          <label for='email'>E-mail</label>
          <input type='text' aria-labelledby='email' value={email} onChange={e => setEmail(e.target.value)}/>
          <label for='password'>Password</label>
          <input type='password' aria-labelledby='password' value={password} onChange={e => setPassword(e.target.value)}/>
          <button type='submit' className='login__signInBtn' onClick={signIn}>Sign In</button>
        </form>
        { errMsg ?
          <div className='login__errMsg'>
            <strong>{ errMsg }</strong>
          </div>
          :
          null
        }
        <button className='login__registerBtn' onClick={register}>Create Your eShop Account</button>
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

export default Login