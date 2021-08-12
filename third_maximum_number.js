/*Given integer array nums, return the third maximum number in this array. If the third maximum does not exist, return the maximum number.
*/

const thirdMax = (nums) => {
    nums = [...new Set(nums)];
    sorted = nums.sort((a, b) => b - a);
    if (sorted.length < 3) {
        return sorted[0];
    } return sorted[2];
};
console.log(thirdMax([3,2,2,4,2,5,1,6,7]))