import './Product.css'

function Product() {
  return (
    <div className="product">
      <div className="product__imgContainer">
        <img src="https://loremflickr.com/320/240/dog" alt="dog" className="product_image" />
      </div>
      <div className="product__details">
        <h2 className="product__title">Product Title</h2>
        <ul className="product__list">
          <li className="product__item">Detail 1</li>
          <li className="product__item">Detail 2</li>
          <li className="product__item">Detail 3</li>
        </ul>
        <h3 className="product__price">$9.99</h3>
      </div>
    </div>
  )
}

export default Product