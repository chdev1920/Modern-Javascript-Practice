let array = [1, 3, 4, 5, 4, 7, 9];
console.log(binarySearch(array, 4));


function binarySearch(array, key) {
    let left = 0;
    let right = array.length-1;

    while(left <= right){
      let midpoint = left + Math.floor((right-left)/2);

      if(array[midpoint] == key){
        return midpoint;
      }

      if(array[midpoint] > key){
        right = midpoint;
      } else {
        left = midpoint;
      }
    }
}

int binarySearch(int[] nums, int target){
  if(nums == null || nums.length == 0){
    return -1;
  }

  int left = 0;
  int right = nums.length - 1;
  while(left <= right){
    // Prevent (left + right) overflow
    int mid = left + (right - left) / 2;
   
    if(nums[mid] == target){ return mid; }
    else if(nums[mid] < target) { left = mid + 1; }
    else { right = mid - 1; }
  }

  // End Condition: left > right
  return -1;
}

int binarySearch(int[] nums, int target){
  if(nums == null || nums.length == 0){
    return -1;
  }

  int left = 0;
  right = nums.length;

  while(left < right){
    // Prevent (left + right) overflow
    int mid = left + (right - left) / 2;
   
    if(nums[mid] == target){ return mid; }
    else if(nums[mid] < target) { left = mid + 1; }
    else { right = mid; }
  }

  // Post-processing:
  // End Condition: left == right
  if(left != nums.length && nums[left] == target) return left;
  
     







































// const merge = (nums1, m, nums2, n) => {
//   let left = m - 1;
//   let right = n - 1;

//   for (let i = nums1.length - 1; i >= 0; i--) {
//     if (right < 0) {
//       break;
//     }

//     if (left >= 0 && nums1[left] > nums2[right]) {
//       nums1[i] = nums1[left--];
//     } else {
//       nums1[i] = nums2[right--];
//     }
//   }

