import { ADD_FAVOURITE, SET_RECOMMENDATIONS, SET_SEARCH_RESULT, SET_IS_LOADING, SET_CURRENT_COMPANY, SET_IS_CART_FILLED, SET_INSIDE_CART } from '../actionTypes'

const initialState = {
  favourites : [],
  recommendations: [],
  searchResult : [],
  isLoading: false,
  currentCompany: {},
  insideCart: {},
  isCartFilled: true
}

function companyReducer (state = initialState, action) {
    const { type, payload } = action
    
    switch (type) {
      case ADD_FAVOURITE:
        return { ...state, favourites : [...state.favourites, payload] }
      case SET_RECOMMENDATIONS:
        return { ...state, recommendations : payload }
      case SET_SEARCH_RESULT:
        return { ...state, searchResult : payload }
      case SET_IS_LOADING:
        return { ...state, isLoading : payload }
      case SET_CURRENT_COMPANY:
        return { ...state, currentCompany : payload }
      case SET_IS_CART_FILLED:
        return { ...state, isCartFilled : payload }
      case SET_INSIDE_CART:
        return { ...state, insideCart : payload }
      default:
        return state
  }

}

export default companyReducer