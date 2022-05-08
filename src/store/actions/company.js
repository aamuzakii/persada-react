import { ADD_FAVOURITE, SET_RECOMMENDATIONS, SET_SEARCH_RESULT, SET_IS_LOADING, SET_CURRENT_COMPANY, SET_IS_CART_FILLED, SET_INSIDE_CART } from '../actionTypes'

export function addToFavourite(input) {
  return {
    type: ADD_FAVOURITE,
    payload: input
  }
}

export function setRecommendations(input) {
  return {
    type: SET_RECOMMENDATIONS,
    payload: input
  }
}

export function setCurrentCompany(input) {
  return {
    type: SET_CURRENT_COMPANY,
    payload: input
  }
}

export function setInsideCart(input) {
  return {
    type: SET_INSIDE_CART,
    payload: input
  }
}

export function setSearchResult(input) {
  return {
    type: SET_SEARCH_RESULT,
    payload: input
  }
}

export function setIsLoading(input) {
  console.log(`siao`)
  return {
    type: SET_IS_LOADING,
    payload: input
  }
}

export function setIsCartFilled(input) {
  console.log(`masuk`)
  return {
    type: SET_IS_CART_FILLED,
    payload: input
  }
}

export function fetchRecommendations() {
  return ((dispatch) => {
    dispatch(setIsLoading(true))
    let url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-recommendations?symbol=MSFT'
    fetch(url, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
      }
    })
    .then( response => {
      return response.json()
    })
    .then( data => {
      dispatch(setRecommendations(data.finance.result[0].quotes))
    })
    .catch( err => {
      console.log(err)
    })
    .finally( () => {
      dispatch(setIsLoading(false))
    })
  })
}

export function fetchSearch(query) {
  console.log(`47`)
  return dispatch => {
    console.log(`49`)
    dispatch(setIsLoading(true))
    fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/auto-complete?query=${query}&region=US`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
      }
    })
    .then(response => {
      return response.json()
    })
    .then( data => {
      console.log(data, `<< 62`)
      dispatch(setSearchResult(data.ResultSet.Result))
    })
    .catch(err => {
      console.error(err);
    })
    .finally( () => {
      dispatch(setIsLoading(false))
    })
  }
}

export function fetchCompanyById(symbol) {
  return dispatch => {
    let url = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/auto-complete?query=${symbol}&region=US`
    fetch(url, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
      }
    })
    .then( response => {
      return response.json()
    })
    .then( data => {
      dispatch(setRecommendations(data))
    })
    .catch( err => {
      console.log(err)
    })
    .finally( () => {
      dispatch(setIsLoading(false))
    })
  }
}