function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
}

function binarySearch(arr, item) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === item) return mid; // Item found

    if (arr[mid] > item) {
      right = mid - 1; // Move left
    } else {
      left = mid + 1; // Move right
    }
  }

  return -1; // Item not found
}

function ternarySearch(arr, item) {
  //* Divide into 3 parts, the parts in which the array is divided may or maynot be equal

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // Calculate two midpoints to divide the array into three parts
    let mid1 = left + Math.floor((right - left) / 3);
    let mid2 = right - Math.floor((right - left) / 3);

    // Step 3: Check if the item is found at either mid1 or mid2
    if (arr[mid1] === item) return mid1;
    if (arr[mid2] === item) return mid2;

    // Step 4: Narrow down the search range based on the item’s position

    if (item < arr[mid1]) {
      // If the item is smaller than mid1, search in the left third
      right = mid1 - 1;
    } else if (item > arr[mid2]) {
      // If the item is larger than mid2, search in the right third
      left = mid2 + 1;
    } else {
      // If the item is between mid1 and mid2, search in the middle third
      left = mid1 + 1;
      right = mid2 - 1;
    }
  }
  return -1; // If item is not found
}

function jumpSearch(arr, item) {
  //* this alogorithm works by jumping sqrt(length) and checking if passed the target

  let n = arr.length;

  let step = Math.floor(Math.sqrt(n));

  let low = 0;

  while (arr[Math.min(step, n) - 1] < item) {
    //* if item is greater than the length of the arr -1 or the step then jump

    low = step; // Move the low pointer to the current step

    step += Math.floor(Math.sqrt(n)); // Move the step forward

    //* If we've gone past the end of the array, the item isn't present
    if (low >= n) return -1;
  }

  //* do a binary search from low to step and return if found
  for (let i = low; i < Math.min(step, n); i++) {
    if (arr[i] === item) return i;
  }

  return -1; // Not found
}

const mockData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let key = 16;
let result = jumpSearch(mockData, key);

console.log(
  result !== -1 ? `Found at index ${result}` : "Not found",
  mockData[result]
);
