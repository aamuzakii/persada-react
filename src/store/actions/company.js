import { ADD_FAVOURITE, SET_RECOMMENDATIONS, SET_SEARCH_RESULT, SET_IS_LOADING, SET_CURRENT_COMPANY, SET_IS_CART_FILLED, SET_INSIDE_CART, SET_PRODUCT_TO_SHOW } from '../actionTypes'

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

export function fetchProductsByCategory() {
  return ((dispatch) => {
    let url = 'http://localhost:3000/products'

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
    // fetch("http://localhost:3000/products", {
    //   "headers": {
    //     "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    //     "accept-language": "en-US,en;q=0.9",
    //     "cache-control": "max-age=0",
    //     "sec-fetch-dest": "document",
    //     "sec-fetch-mode": "navigate",
    //     "sec-fetch-site": "none",
    //     "sec-fetch-user": "?1",
    //     "upgrade-insecure-requests": "1"
    //   },
    //   "referrerPolicy": "strict-origin-when-cross-origin",
    //   "body": null,
    //   "method": "GET",
    //   "mode": "cors",
    //   "credentials": "include"
    // })
    // .then( response => {
    //   console.log(111)
    //   console.log(response.json())
    //   return response.json()
    // })
    // .then( data => {
    //   dispatch(setRecommendations(data.finance.result[0].quotes))
    // })
    // .catch( err => {
    //   console.log(err)
    // })
    // .finally( () => {
    //   console.log('ini final')
    //   dispatch(setIsLoading(false))
    // })
  })
}