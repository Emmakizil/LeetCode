const findNumbers = function(nums) {
    let count = 0;
    for (i=0; i<nums.length; i++){
       string = nums[i].toString().length;
       if(string % 2 == 0) count++   
    }
    return count;
};

console.log(findNumbers([112,12,345,1111]))

/* What did I learn:
    - how to find length of each item: convert it to a string
*/