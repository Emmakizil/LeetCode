/* 1313. Decompress Run-Length Encoded List
We are given a list nums of integers representing a list compressed with run-length encoding.
Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.
Return the decompressed list.*/

// const decompressRLElist = function(nums) {
//     let lst = [];
//     let freq = 0;
//     for (i=0; i<nums.length; i+=2) {
//         freq = i+1;
//         for (j=0; j<nums[i]; j++) {
//             lst.push(nums[freq]);
//         }
//     }  return lst;
// };

const decompressRLElist = function(nums) {
    let lst = [];
    for (i=0; i<nums.length; i+=2){
        lst.push(...new Array(nums[i]).fill(nums[i+1]))
    } return lst;
};

console.log(decompressRLElist([1,2,3,4]))

/* What did I learn:
    - new Array
    -fill()
*/
