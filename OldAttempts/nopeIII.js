function removeDuplicates(nums) {
    //          i 
    //[0, 1, 1, 1, 2, 3]
    // j
    console.log(nums[8])
    let i=nums.length-1;
    let j=nums.length-2;
    
    while(j >= 0){
       if(nums[i] != nums[j]){
         console.log("Not Equal: i(" + i + ") j(" + j + ")");
         console.log("NUMS[I] " + nums[i] + " " + nums[i-1]);
         console.log(i);
         console.log(nums[i] + ", " + nums[j] + ", " + (nums[i]==nums[j]))
           let temp = j;
           i = temp;
           j--;
       } else {
         while(nums[i] == nums[j-1] && j-1 >= 0){
           console.log("Equal: i(" + i + ") j:(" + j + ") j-1:(" + (j-1) + ")");
           j--;
         }
         nums.splice(j+1, i);
       }
    }
    console.log(nums(8));
    return nums;
    
    
    
    /*
    let leftmost = 0;
    let rightmost = 0;
    
    for(let i=0; i<nums.length-1; i++){
        let j = i+1
        while(nums[i] == nums[j]){
            j++;
        }
        rightmost = j; 
        splice(i, j+1);
    }
    */
};

//console.log([0,0,1,1,1,2,2,3,3,4].length);
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
//console.log([0,0,1,1,1,2,2,3,3,4][8])

//the problem is that it's removing everything. 
//                 
//[0,0,1,1,1,2,2,3,3,4]
// 0 1 2 3 4 5 6 7 8 9