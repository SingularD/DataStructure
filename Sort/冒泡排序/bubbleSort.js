const testArray = [4, 5, 2, 6, 2, 8, 9, 0, 1]

const swap = (arr, a, b) => {
  if (arr[a] > arr[b]) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
  }
}

const sort = (arr) => {
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length - 1; j++){
      swap(arr, j, j + 1)
    }
  }
  return arr
}

console.log(sort(testArray))
