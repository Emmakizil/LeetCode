/* 1913. Maximum Product Difference Between Two Pairs
The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).
For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
Given an integer array nums, choose four distinct indices w, x, y, and z such that the product
difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.
Return the maximum such product difference.*/

const maxProductDifference = function(nums) {
    nums.sort((a,b) => a-b)
    return (nums[nums.length-1] * nums[nums.length-2]) - (nums[0] * nums[1])
};

console.log(maxProductDifference([5,6,2,7,4]))

/* What did I learn:
    - what is difference between sort() and sort((a,b)=>a-b)
       - To compare numbers instead of strings, the compare function can subtract b from a.
         The following function will sort the array in ascending order (if it doesn't contain Infinity and NaN):
         function compareNumbers(a,b) => a-b;

Question: why we can't use nums[-1] instead of nums[num.length-1]. becuae it's for Python not js
*/