/*
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.
*/

const findDisappearedNumbers = function(nums) {
    const missings = []
    const numset = new Set(nums)
    for(let i = 1; i <= nums.length; i++)
        if(!numset.has(i)) missings.push(i)
    
    return missings;
}

console.log(findDisappearedNumbers([1,1]))

/* What did I learn:
    -has method
*/