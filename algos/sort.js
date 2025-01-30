function bubbleSort(arr) {
  // Best Case (Already Sorted)	  O(n) (Optimized Version)
  // Average Case	                O(n²)
  // Worst Case (Reverse Sorted)	O(n²)
  let n = arr.length;

  let swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) break;
  }
  return arr;
}

const unsortedArray = [
  2, 4, 6, 1, 7, 9, 6, 6, 8, 100, 34, 67, 7, 88, 67, 454, 55, 56, 53,
];

console.log("Unsorted:", [...unsortedArray]); // Show original
console.log("Sorted:", bubbleSort(unsortedArray));
