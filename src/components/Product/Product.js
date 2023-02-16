import './Product.css'

function Product({ title, price, rating, imageUrl }) {
  return (
    <div className="product">
      <div className="product__details">
        <p className="product__title">{ title }</p>
        <p className="product__price">${ price }</p>
        <div className="product__rating">{
          Array(rating).fill().map((_, i) => (
            <p>⭐️</p>
        ))}</div>
      </div>
      <img src={ imageUrl } alt={ title } className="product__image" />
      <button>Add to Basket</button>
    </div>
  )
}

export default Product