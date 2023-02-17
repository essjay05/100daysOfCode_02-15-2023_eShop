/* eslint-disable no-unused-vars */
import './Checkout.css'
import './Subtotal.css'

import { Currency } from 'react-tender'
import { useStateValue } from '../../store/StateProvider'
import { getBasketTotal } from '../../store/reducer'

function Subtotal() {

  const [{ basket }, dispatch] = useStateValue()

  return (
    <div className='subtotal'>
      <p className='subtotal__summary'> 
        Subtotal ({ basket.length } items): <span className='subtotal__amt'>
          <Currency
            value={getBasketTotal(basket)} 
            currency='USD' 
            locale='en-US'/>
        </span>
      </p>
      <small className='subtotal__gift'>
        <input type='checkbox' /> This order contains a gift.
      </small>
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal