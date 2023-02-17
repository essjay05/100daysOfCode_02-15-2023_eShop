import './Checkout.css'
import './Subtotal.css'
import { Currency } from 'react-tender'

function Subtotal() {
  return (
    <div className='subtotal'>
      <p> 
        Subtotal (0 items): <span className='subtotal__amt'><Currency  value={0.00} currency='USD' locale='en-US'/></span>
      </p>
      <small className='subtotal__gift'>
        <input type='checkbox' /> This order contains a gift.
      </small>
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal