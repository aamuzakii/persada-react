export const objToArr = (obj) => {
  let arr = []
  for (const key of Object.keys(obj)) {
    if (obj[key].qty > 0) arr.push(obj[key])
  }
  return arr
}