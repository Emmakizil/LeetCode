/*
1920. Build Array from Permutation
Given a zero-based permutation nums (0-indexed), build an array ans of the same
length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.
A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).
*/


const buildArray = function(nums) {
    let ans = [];
    for (i = 0; i < nums.length; i++){
        ans.push(nums[nums[i]]); //
    }
    return ans;
};

console.log(buildArray([0,2,1,5,3,4]))


/*
var buildArray = function(nums) {
    return nums.map(val => nums[val])
};

*/

/*
What did I learn:
    - .map
    - forEach and .map is different. forEach doesn't return anything. It only lets use to go over the array and do somehting on the elements
    - sometime we need to have the original array unchanged

Quetion: What does permutation mean (zero based permutation), is it difference with math permutation?
Is there example/hint in interviews
    */