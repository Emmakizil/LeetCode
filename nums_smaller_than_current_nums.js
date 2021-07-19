/* 1365. How Many Numbers Are Smaller Than the Current Number
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
Return the answer in an array.*/


// const smallerNumbersThanCurrent = function(nums) {
//     small_nums_count = [];
//     nums2 = nums.sort();
//     console.log(num2);
//     for(i=0; i<nums2.length; i++){
//         for(j=1; j<nums2.length; j++){
//             counter = 0;
//             if(nums2[i] < nums2[j]){
//                 break;
//             } else{
//                 counter++
//             }
//         } nums2.push(counter)
//     }
//     return small_nums_count;
// };



const smallerNumbersThanCurrent = function(nums) {
    return nums.map((numa) => nums.reduce((total, numb)=> numa>numb ? total+1 : total, 0))
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]))

// var smallerNumbersThanCurrent = function(nums) {
//     const sorted = nums.sort();

//     return nums.map(v => sorted.indexOf(v));
// };


console.log(smallerNumbersThanCurrent([8,1,2,2,3]))

/* What did I learn:
- .map and .reduce

Need to learn what is lodash
*/