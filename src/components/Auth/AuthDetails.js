import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase'

function AuthDetails() {

  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    })
    return () => {
      listen()
    }
  }, [])

  return (
    <section className='authDetails'>
      { authUser ? <p>{`Signed in as ${authUser.email}`}</p> : <p>Signed Out</p>}
    </section>
  )
}

export default AuthDetails