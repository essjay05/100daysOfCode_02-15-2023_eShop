import './Checkout.css'
import './CheckoutProduct.css'
import { Currency } from 'react-tender'

function CheckoutProduct({ id, title, imageUrl, price, rating }) {
  return (
    <div className='checkoutProduct'>
      <img src={imageUrl} alt={title} className="checkoutProduct__image" />
      <div className="checkoutProduct__details">
        <p className="checkoutProduct__title">{ `Ramsay in 10 Hardcover – November 2, 2021 by Gordon Ramsay  (Author)` }</p>
        <p className="checkoutProduct__price">
          <Currency value={price} currency='USD' locale='en-US'/> 
        </p>
        {/* <div className="checkoutProduct__rating">⭐️⭐️⭐️⭐️⭐️</div> */}
        <div className="checkoutProduct__rating">{
          Array(rating).fill().map((_, i) => (
            <p>⭐️</p>
        ))}</div>
        <button>Remove from Basket</button>
      </div>
      
    </div>
  )
}

export default CheckoutProduct