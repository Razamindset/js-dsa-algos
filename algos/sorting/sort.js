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

function selectionSort(arr) {
  // 1. Find the smallest element in the array and swap it with the first element
  // 2. Find the next smallest element and swap it with the second element and repeat until sorted

  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let min = i; //Assume the current index is the smallest

    // 3, 4, 5, 5, 8, 6, 7, 0
    // From the example the minimum will found at the last index. After that we will update the index of the min
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j; // Update the minimum to be j
      }
    }

    // As we have found the min Index now we can check if the minimum index is i if not then we can just swap them
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
}

function insertionSort(arr) {
  // Best case (already sorted):  O(n)
  // Average and worst case:      O(n²)

  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;


    // Shift the larger items to the right
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the key at the correct spot
    arr[j + 1] = key;
  }

  return arr;
}

const unsortedArray = [
  2, 4, 6, 1, 7, 9, 6, 6, 8, 100, 34, 67, 7, 88, 67, 454, 55, 56, 53,
];

console.log("Unsorted:", [...unsortedArray]); // Show original
console.log("Bubble Sorted:", bubbleSort(unsortedArray));
console.log("Selection Sort:", selectionSort(unsortedArray));
console.log("Insertion sort:", insertionSort(unsortedArray));
