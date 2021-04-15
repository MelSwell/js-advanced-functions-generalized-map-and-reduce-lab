// Add your functions here
const map = (arr, callback) => {
  const newArr = []
  for (const elem of arr) {
    newArr.push(callback(elem))
  }
  return newArr
}

const reduce = (arr, callback, startingPoint) => {
  let total = (!!startingPoint) ? startingPoint : arr[0]
  let i = (!!startingPoint) ? 0 : 1
  for (i = i; i < arr.length; i++) {
    total = callback(arr[i], total)
  }
  return total
}