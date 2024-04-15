function merge(arr1, arr2) {
  let answer = []
  while (arr1.length && arr2.length) {
    if (arr1[0] > arr2[0]) {
      answer.push(arr2.shift())
    } else {
      answer.push(arr1.shift())
    }
  }
  return [...answer, ...arr1, ...arr2]
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  let middle = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, middle))
  let right = mergeSort(arr.slice(middle))
  return merge(left, right)
}
if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-10, 0, 2, 2, 5, 10, 20]");
  console.log("=>", mergeSort([10, -10, 0, 2, 20, 5, 2]));
}

module.exports = mergeSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
