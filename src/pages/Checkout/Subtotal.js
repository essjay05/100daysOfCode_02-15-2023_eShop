import './Checkout.css'
import { Currency } from 'react-tender'

function Subtotal() {
  return (
    <div className='subtotal'>
      <p> 
        Subtotal (0 items): <Currency value={0.00} currency='USD' locale='en-US'/>
      </p>
      <small className='subtotal__gift'>
        <input type='checkbox' /> This order contains a gift.
      </small>
    </div>
  )
}

export default Subtotal