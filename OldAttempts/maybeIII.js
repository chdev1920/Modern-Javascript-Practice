let sample = [1, 2, 3, 4, 5];
let i=0;
let i2=0;

let samplei = sample[++i];
let samplei2 = sample[i2++];


console.log("Array list: " + sample);
console.log("i: " + i);
console.log("i2: " + i2);
console.log("samplei: " + samplei);
console.log("samplei2: " + samplei2);

//you have to make an active choice to practice those things, to use those tools


var removeDuplicates = function(nums) {
    if(nums.length === 0){ return 0 };
    var n = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[n] !== nums[i]){
            n++;
            nums[n] = nums[i];
        }
    }
    return n+1;
};


