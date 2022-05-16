export const objToArr = (obj) => {
  let arr = []
  for (const key of Object.keys(obj)) {
    if (obj[key].qty > 0) arr.push(obj[key])
  }
  return arr
}

export const countTotalPriceInsideCartArray = (insideCartArray) => {
  let total = 0
  insideCartArray.forEach(item => {
    console.log(item)
    total += item.int_price * item.qty
  })
  let decorated_total = formatter.format(total)

  return decorated_total
}

const formatter = new Intl.NumberFormat('id-ID');