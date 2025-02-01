function mergeSort(arr) {
    // Merge Sort has a time complexity of O(n log n) because the array is repeatedly divided in half (log n)
    // and merging takes linear time (n).
    
    // Base case: If the array has 1 or no elements, it is already sorted.
    if (arr.length <= 1) return arr;
  
    // Find the middle index to split the array into two halves.
    let mid = Math.floor(arr.length / 2);
  
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
  
    // Merge the sorted halves and return the final sorted array.
    return merge(left, right);
  }
  
  function merge(left, right) {
    let results = [];
    let i = 0, j = 0;
  
    // Merge elements from both halves in sorted order.
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) results.push(left[i++]);
      else results.push(right[j++]);
    }
  
    // Append any remaining elements from left or right.
    return results.concat(left.slice(i), right.slice(j));
  }
  
  const unsortedArray = [2, 4, 1, 7, 9, 6, 8];
  
  console.log("Unsorted:", [...unsortedArray]);
  console.log("Merge Sorted:", mergeSort(unsortedArray));
  