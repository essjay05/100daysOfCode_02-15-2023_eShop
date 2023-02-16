import './Product.css'

function Product() {
  return (
    <div className="product">
      <div className="product__details">
        <p className="product__title">Product Title</p>
        <p className="product__price">$30.00</p>
        <div className="product__rating">⭐️ ⭐️ ⭐️ ⭐️</div>
      </div>
      <img src="https://loremflickr.com/320/240/dog" alt="dog" className="product__image" />
      <button>Add to Basket</button>
    </div>
  )
}

export default Product