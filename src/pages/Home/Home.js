import './Home.css'
import '../../App.css'

import Product from '../../components/Product/Product'

function Home() {
  return (
    <main>
      <div className="home"></div>
      <div className="home__container">
        <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" className="home__image" />
        <div className="home__row">
          <Product/>
          <Product/>
        </div>
        <div className="home__row">
          <Product/>
          <Product/>
          <Product/>
        </div>
        <div className="home__row">
          <Product/>
        </div>
      
      </div>
    </main>
  )
}

export default Home