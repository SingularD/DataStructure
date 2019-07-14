const swap = (arr, i, j) => {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

const quick = (arr, left, right) => {
  let index
  if (arr.length > 1) {
    index = partition(arr, left, right)
    if (left < index - 1) quick(arr, left, index - 1)
    if (right > index) quick(arr, index, right)
  }
  return arr
}

const partition = (arr, left, right) => {
  let pivot = arr[parseInt((left + right)/2)];
  console.log(pivot)
  let i = left;
  let j = right;
  while (i <= j) {
    while (arr[i] < pivot) {
      i++
    }
    while (arr[j] > pivot) {
      j--
    }
    if (i <= j) {
      swap(arr, i, j)
      i++;
      j--;
    }
  }
  return i;
}

const arr = [2,8,6,5,9]

console.log(quick(arr, 0, 4))
