/* eslint-disable default-case */
// here we define all the application level states and define actions to make changes to the state

export const initialState = {
  basket: [],
}

export const getBasketTotal = (basket) => {
  return (basket?.reduce((amt, item) => item.price + amt, 0))
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TO_BASKET':
    return {
      ...state,
      basket: [...state.basket, action.item]
    }
    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      )

      let newBasket = [...state.basket]
      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.warn(
          `Can't remove product id(${action.id}).
          Not found in basket.`
        )
      }
      return {
        ...state,
        basket: newBasket
      }
    default:
      return state
  }
}

export default reducer