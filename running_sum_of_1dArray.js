/* 
1480. Running Sum of 1d Array
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.
*/

const runningSum = function(nums) {
    num_sums = [];
    for (i = 0; i < nums.length-1; i++){
        num_sums.push(nums[i]+nums[i+1]);
    }
    return num_sums
};

console.log(runningSum([1,2,3,4]))

/*
const runningSum = function(nums) {
    let start = 0;
    return nums.map(num=> start=start+num);
};
*/


/* What did I learn:
    -.map
    -

Question: What is a 1d array?
*/