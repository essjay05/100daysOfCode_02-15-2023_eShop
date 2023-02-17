import './Header.css'

import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
// import SearchIcon from '@mui/icons-material/Search';
import { Search } from '@mui/icons-material';
import { Link } from 'react-router-dom'

import { useStateValue } from '../../store/StateProvider'

function Header() {

  const [{basket}, dispatch] = useStateValue()

  return (
    <header className="header flex-center-between">
      <Link to='/' style={{ textDecoration: 'none'}}>
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
        <div className="nav__item">
          <span className="nav__itemLine1">Hello Guest</span>
          <span className="nav__itemLine2">Sign In</span>
        </div>
        <div className="nav__item">
          <span className="nav__itemLine1">Your</span>
          <span className="nav__itemLine2">Shop</span>
        </div>
        <Link to='/checkout' style={{ textDecoration: 'none'}}>
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