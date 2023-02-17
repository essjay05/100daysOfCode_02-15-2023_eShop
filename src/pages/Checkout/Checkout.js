import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

import { useStateValue } from '../../store/StateProvider'

function Checkout() {

  const [{ basket }, dispatch] = useStateValue()

  return (
    <main className='checkout'>
      <div className="checkout__left">
        <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="Amazon ad" className="checkout__ad" />
        <div>
          <h2 className="checkout__title">
            Your Shopping Basket
          </h2>
          {basket.length > 0 ?
            basket.map((item, index) => (
              <CheckoutProduct
                key={index}
                id={item.id}
                imageUrl={item.imageUrl}
                title={item.title}
                price={item.price}
                rating={item.rating}
                dispatch={dispatch}
              />
            ))
            :
            <p className='checkout__subtitle'>
              Your basket is empty!
            </p>
          }
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </main>
  )
}

export default Checkout