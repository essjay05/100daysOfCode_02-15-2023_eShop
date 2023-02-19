import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import './Login.css'
import StorefrontIcon from '@mui/icons-material/Storefront'


function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
          <input type='text' aria-labelledby='password' value={password} onChange={e => setPassword(e.target.value)}/>
          <button type='submit' className='login__signInBtn'>Sign In</button>
        </form>
        <p>
          By signing-in you agree to the eShop Website Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <p>
          *This is a sample eShop project meant to show use of React.js methods. Not meant for actual sale of actual items.
        </p>
        <button className='login__registerBtn'>Create Your eShop Account</button>
      </section>
    </main>
  )
}

export default Login