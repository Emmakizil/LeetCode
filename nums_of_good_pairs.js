/* 1512. Number of Good Pairs
Given an array of integers nums.
A pair (i,j) is called good if nums[i] == nums[j] and i < j.
Return the number of good pairs. */

const numIdenticalPairs = function(nums) {
    let pairs_count = 0;
    for (i=0; i<nums.length; i++){
        for(j=1; j<nums.length; j++){
            if (nums[i]==nums[j] && i<j){
                pairs_count++;
            }
        } 
    }
    return pairs_count
};

console.log(numIdenticalPairs([1,2,3,1,1,3]))

/*
What did I learn:
 -reviwed for loop
*/