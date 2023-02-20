import { useEffect, useLocation, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'

import './Auth.css'
import StorefrontIcon from '@mui/icons-material/Storefront'

function Auth({ signUp, pageTitle }) {

  const location = useLocation()

  const navigate = useNavigate()

  const [authValue, setAuthValue] = useState(signUp)
  const [errMsg, setErrMsg] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = e => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
        setAuthValue(!authValue)
        navigate('/')
      })
      .catch(err => {
        console.error(err.message)
        alert(err.messsage)
        setErrMsg(err.message)
      })
  }

  const register = e => {
    e.preventDefault()

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
        if (userCredential) {
          setAuthValue(!authValue)
          navigate('/')
        }
      })
      .catch(err => console.error(err.message))
  }

  const toggleAuthValue = e => {
    e.preventDefault()
    setAuthValue(!authValue)
  }

  console.log(`authValue: ${authValue}`)
  console.log(`location: ${location}`)

  // useEffect(() => {
  //   if (signUp) {

  //   }
  // }, [])

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
          <label for='email'>E-mail</label>
          <input type='text' aria-labelledby='email' value={email} onChange={e => setEmail(e.target.value)}/>
          <label for='password'>Password</label>
          <input type='password' aria-labelledby='password' value={password} onChange={e => setPassword(e.target.value)}/>
          { authValue ? 
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
        { errMsg ? 
          <div className='auth__errMsg'>
            <strong>{ errMsg }</strong>
          </div>
          :
          null
        }
        { authValue ?
          <Link to='/signup' className='auth__registerBtn btn'>
            Create Your eShop Account
          </Link>
          :
          <Link to='/login' className='auth__registerBtn btn'>
            Log Into Your eShop Account
          </Link>
        }
      </section>
    </main>
  )
}

export default Auth