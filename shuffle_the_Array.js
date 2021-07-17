/* 1470. Shuffle the Array
Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
Return the array in the form [x1,y1,x2,y2,...,xn,yn].*/

/*const shuffle = function(nums, n) {
   nums.map() 
};*/

const shuffle = function(nums, n) {
    let nums2 = [];
    let shuffled = [];
    for (i=n; i<nums.length; i++){
        nums2.push(nums[i]); 
    }
    for (i=0; i<nums2.length; i++){
        shuffled.push(nums[i])
        shuffled.push(nums2[i])
    }
    return shuffled
};

console.log(shuffle([1,2,3,4,5,6], 3))