/*Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.*/

const moveZeroes = function(nums) {
    let length = nums.length
    for(i=0; i<length; i++){
        if(nums[i]==0){
            nums.splice(i,1);
            nums.push(0);
            i--;
            length--;
        }
    } return nums
};

console.log(moveZeroes([0,1,0,3,12]))