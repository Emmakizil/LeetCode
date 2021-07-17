/* 1470. Shuffle the Array
Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
Return the array in the form [x1,y1,x2,y2,...,xn,yn].*/

/*const shuffle = function(nums, n) {
   nums.map() 
};*/

let shuffle = function(nums, n) {
    let arr2=[];
    let final=[];
     for(let i=n;i<nums.length;i++){
          arr2.push(nums[i]);
     }
     for(let i=0;i<n;i++){
         final.push(nums[i]);
         final.push(arr2[i]);
     }
     return final;
 };

 console.log(shuffle([1,2,3,4,5,6], 3))