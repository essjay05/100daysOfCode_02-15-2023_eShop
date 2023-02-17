import './Home.css'
import '../../App.css'

import Product from '../../components/Product/Product'

function Home() {
  return (
    <main className="home">
      <div className="home__container">
        <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="E-Commerce Hero Img" className="home__image" />
        <div className="home__row">
          <Product
            id={572992}
            title="Ramsay in 10 Hardcover – November 2, 2021
            by Gordon Ramsay  (Author)"
            price={26.60}
            rating={5}
            imageUrl="https://m.media-amazon.com/images/P/1538707810.01._SCLZZZZZZZ_SX500_.jpg"/>
          <Product
            id={250920}
            title="FLYBIRD Adjustable Bench, Utility Weight Bench for Full Body Workout- Multi-Purpose Foldable Incline/Decline Benchs, Regular/Roman Chair"
            price={145.99}
            rating={5}
            imageUrl="https://m.media-amazon.com/images/I/61LCzHjGfRL._AC_SL1500_.jpg"/>
        </div>
        <div className="home__row">
          <Product
            id={136863}
            title="HOOMEET 24 Pack Silicone Cupcake Liners, Non-Stick Muffin Liners, Silicone Muffin Cups, Silicone Baking Cups, Reusable cupcake liners for baking, Red Blue Green Yellow Pink Orange Color"
            price={9.99}
            rating={5}
            imageUrl="https://m.media-amazon.com/images/I/71hV3keRRrL._AC_SL1500_.jpg"/>
          <Product
            id={791638}
            title="Om Mushroom Superfood Master Blend Mushroom Powder Supplement, 3.17 Ounce, 34 Servings, 10 Mushroom Complex, Lions Mane, Chaga, Cordyceps, Reishi Extract Adaptogens for Vibrant Health, Immune Support"
            price={16.99}
            rating={3}
            imageUrl="https://m.media-amazon.com/images/I/81Zm6JUAneL._AC_SL1500_.jpg"/>
          <Product
            id={111389}
            title="Surge Protector Power Strip - 8 Widely Outlets with 4 USB Charging Ports, 3 Side Outlet Extender with 5Ft Braided Extension Cord, Flat Plug, Wall Mount, Desk USB Charging Station for Home Office ETL"
            price={17.99}
            rating={5}
            imageUrl="https://m.media-amazon.com/images/I/61ZbXVoHlDL._AC_SL1500_.jpg"/>
        </div>
        <div className="home__row">
          <Product
            id={787935}
            title={`Amazon Fire TV 43" 4-Series 4K UHD smart TV, stream live TV without cable`}
            price={269.99}
            rating={4}
            imageUrl="https://m.media-amazon.com/images/I/51EOfJxElNL._AC_.jpg"/>
        </div>
      
      </div>
    </main>
  )
}

export default Home