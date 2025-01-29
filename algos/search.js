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
  //* We need to divide our array into 3 parts first and then calculate the the midpoints of the first and last parts of the divided array
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

const mockData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let key = 6;
let result = binarySearch(mockData, key);

console.log(result !== -1 ? `Found at index ${result}` : "Not found", mockData[result]);
