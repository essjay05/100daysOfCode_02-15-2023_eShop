import { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../firebase'

import './Header.css'

import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
// import SearchIcon from '@mui/icons-material/Search';
import { Search } from '@mui/icons-material';
import { Link } from 'react-router-dom'

import { useStateValue } from '../../store/StateProvider'

function Header() {

  const [authUser, setAuthUser] = useState(null)
  const [{basket}, dispatch] = useStateValue()

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

  const userSignOut = () => {
    signOut(auth).then(() => {
      console.log(`Sign out is successful.`)
    }).catch(err => console.error(err))
  }

  return (
    <header className="header flex-center-between">
      <Link to='/'>
        <div className="header__logo">
          <StorefrontIcon className="header__logoImage" fontSize="large"/>
          <span className="header__logoTitle">J@S eSHOP</span>
        </div>
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput"/>
        <Search className="header__searchIcon"/>
      </div>
      <div className="header__nav">
        { authUser ?
          <div className="nav__item">
            <span className="nav__itemLine1">Hello {authUser.email}</span>
            <span className="nav__itemLine2 link" onClick={userSignOut}>Sign Out</span>
          </div>
          :
          <Link to='/login'>
            <div className="nav__item">
              <span className="nav__itemLine1">Hello Guest</span>
              <span className="nav__itemLine2">Sign In</span>
            </div>
          </Link>
        }
        <div className="nav__item">
          <span className="nav__itemLine1">Your</span>
          <span className="nav__itemLine2">Shop</span>
        </div>
        <Link to='/checkout'>
          <div className="nav__itemBasket">
            <ShoppingBasketIcon className="itemBasket" fontSize="large"/>
            <span className="nav__itemLine2 nav__basketCount">{ basket.length }</span>
          </div>
        </Link>
        
      </div>
    </header>
  )
}

export default Header;