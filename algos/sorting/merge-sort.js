function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));

  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) results.push(left[i++]);
    else results.push(right[j++]);
  }

  return results.concat(left.slice(i)).concat(right.slice(j));
}

const unsortedArray = [2, 4, 1, 7, 9, 6, 8];

console.log("Unsorted:", [...unsortedArray]); // Show original

console.log("Merge Sorted:", mergeSort(unsortedArray));
