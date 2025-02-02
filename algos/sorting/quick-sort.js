function quickSort(arr) {
  // Best nad Average Case: O(n log n) (Divide & Conquer)
  // Worst Case: O(n²) (If pivot choice is bad, like always choosing smallest/largest element)
  if (arr.length <= 1) return arr;

  let pivot = arr[arr.length - 1]; // We will select a pivot elements greator than pivot go to the right less than goto left

  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  // What we will do is that the elements smaller than and greater than will agin be solved using the same process slecting a pivot and arranging in accordance.
  // As we keep splitting the array into smaller parts by pivoting at the last it will consist only of one element and the top condition will be executed
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const unsortedArray = [2, 4, 1, 7, 9, 6, 8];

console.log("Unsorted:", [...unsortedArray]);
console.log("Quick Sorted:", quickSort(unsortedArray));
