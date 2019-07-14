const mergeSort = (arr) => {
  if (arr.length > 1) {
    const middle = parseInt(arr.length/2)
    const left = mergeSort(arr.slice(0, middle))
    const right = mergeSort(arr.slice(middle, arr.length))
    arr = merge(left, right)
  }
  return arr
}

const merge = (left, right) => {
  let i = 0;
  let j = 0;
  const res = []
  while (i < left.length && j < right.length) {
    res.push(left[i] < right[j] ? left[i++] : right[j++])
  }
  return res.concat(i < left.length ? left.slice(i) : right.slice(j))
}

const arr = [5,4,3,2,1]

console.log(mergeSort(arr))
