import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {
  return (
    <main className='checkout'>
      <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="Amazon ad" className="checkout__ad" />
      <section className='checkout__container'>
        <div className="checkout__left">
          <div>
            <h2 className="checkout__title">
              Your Shopping Basket
            </h2>
            <CheckoutProduct/>
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </section>
    </main>
  )
}

export default Checkout