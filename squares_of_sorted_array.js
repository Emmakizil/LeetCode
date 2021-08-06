/* Given an integer array nums sorted in non-decreasing order,
return an array of the squares of each number sorted in non-decreasing order.
Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]*/

const sortedSquares = function(nums) {
   return nums.map(num => num*num).sort((a,b) => a-b)

};
console.log(sortedSquares([-4,-1,0,3,10]))

/* What did I learn:
 -reviwed sort and map method
 */