/*
Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
Return any array that satisfies this condition.
*/

const sortArrayByParity = function(nums) {
    let length = nums.length
    for(i=0; i<length; i++){
        if(nums[i]%2 !== 0){
            nums.push(nums[i]);
            nums.splice(i,1);
            i--;
            length--;
        }
    } return nums;
};

/* What I learn:
    -in place operation
*/