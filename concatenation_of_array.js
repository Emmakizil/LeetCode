// 1929.Concatenation of Array
/*Given an integer array nums of length n, you want to create an array ans of length 2n where
ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
Specifically, ans is the concatenation of two nums arrays.
Return the array ans*/

nums = [1,2,1]
const getConcatenation = function(nums){
    ans = nums.concat(nums);
    return ans
}
console.log(getConcatenation([1,2,1]))