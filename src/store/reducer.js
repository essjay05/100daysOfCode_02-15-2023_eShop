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
  }
}

export default reducer