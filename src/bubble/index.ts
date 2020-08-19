function bubbleSort (arr: Array<number> = []) {
  const array = [...arr]
  const length = array.length
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i; j++) {
      if (array[j] > array[j + 1]) {
        const max = array[j]
        const min = array[j + 1]
        array[j] = min
        array[j + 1] = max
      }
    }
  }

  return array
}
const array = [9, 8, 7, 6, 5, 4, 3, 2, 1]
const result = bubbleSort(array)
console.log(result)
