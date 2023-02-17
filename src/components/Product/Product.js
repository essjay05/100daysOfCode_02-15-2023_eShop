import './Product.css'
import { Currency } from 'react-tender'

import { useStateValue } from '../../store/StateProvider'

function Product({ id, title, price, rating, imageUrl }) {
  
  const [state, dispatch] = useStateValue()

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        imageUrl: imageUrl,
        price: price,
        rating: rating
      }
    })
  }

  return (
    <div className="product">
      <div className="product__details">
        <p className="product__title">{ title }</p>
        <p className="product__price">
          <Currency value={ price } currency='USD' locale='en-US'/>
        </p>
        <div className="product__rating">{
          Array(rating).fill().map((_, i) => (
            <p>⭐️</p>
        ))}</div>
      </div>
      <img src={ imageUrl } alt={ title } className="product__image" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product