console.log(removeDuplicates([0, 0, 1, 1, 2, 2, 3, 3]));

function removeDuplicates(nums){
  //       i 
  //[0, 3, 4, 4, 4, 5]
  //                j    

  //i
  //[0]            
  //       j

  let i=0;
  let j=0;

  while(j < nums.length){
    if(nums[i] == nums[j]){
      j++;
    } else {
      let tempj = j - nums.splice(i+1, j-1).length;
      i=tempj;
    }
  }

  return nums;
  //return the last index
}