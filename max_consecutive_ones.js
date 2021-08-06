
/*Given a binary array nums, return the maximum number of consecutive 1's in the array.*/

const findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let max = 0;
    for(var i=0 ; i < nums.length; i++) {
        nums[i] === 1 ? count++ : count = 0;
        if(count > max) {
            max = count;
        }
    }
    return max;
};

console.log(findMaxConsecutiveOnes([1,0,1,1,1,0,1]))

/* What did I learn:

 */