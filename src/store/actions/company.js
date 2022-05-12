import { ADD_FAVOURITE, SET_RECOMMENDATIONS, SET_SEARCH_RESULT, SET_IS_LOADING, SET_CURRENT_COMPANY, SET_IS_CART_FILLED, SET_INSIDE_CART, SET_PRODUCT_TO_SHOW, SET_PRODUCT_BY_CATEGORY } from '../actionTypes'

const BASE_URI = process.env.REACT_APP_BASE_URI || 'http://ec2-3-139-70-62.us-east-2.compute.amazonaws.com'

export function addToFavourite(input) {
  return {
    type: ADD_FAVOURITE,
    payload: input
  }
}

export function setProductByCategory(input) {
  return {
    type: SET_PRODUCT_BY_CATEGORY,
    payload: input
  }
}

// export function setRecommendations(input) {
//   return {
//     type: SET_RECOMMENDATIONS,
//     payload: input
//   }
// }

// export function setCurrentCompany(input) {
//   return {
//     type: SET_CURRENT_COMPANY,
//     payload: input
//   }
// }

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
  return {
    type: SET_IS_LOADING,
    payload: input
  }
}

export function setIsCartFilled(input) {
  return {
    type: SET_IS_CART_FILLED,
    payload: input
  }
}
export function setProductToShow(input) {
  return {
    type: SET_PRODUCT_TO_SHOW,
    payload: input
  }
}

// export function fetchRecommendations() {
//   return ((dispatch) => {
//     dispatch(setIsLoading(true))
//     let url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-recommendations?symbol=MSFT'
//     fetch(url, {
//       "method": "GET",
//       "headers": {
//         "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
//         "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
//       }
//     })
//     .then( response => {
//       return response.json()
//     })
//     .then( data => {
//       dispatch(setRecommendations(data.finance.result[0].quotes))
//     })
//     .catch( err => {
//       console.log(err)
//     })
//     .finally( () => {
//       dispatch(setIsLoading(false))
//     })
//   })
// }

export function fetchSearch(query) {
  return dispatch => {
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

export function fetchAllProducts() {
  return ((dispatch) => {
    let url = `${BASE_URI}/products`

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        dispatch(setProductToShow(result))
      })
      .catch(error => console.log('error', error));
  })
}

export function fetchProductsAndCategory() {
  return ((dispatch) => {
    let url = `${BASE_URI}/products_and_category`

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        dispatch(setProductByCategory(result))
      })
      .catch(error => console.log('error', error));
  })
}