/* 1662. Check If Two String Arrays are Equivalent
Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.
A string is represented by an array if the array elements concatenated in order forms the string. */

// const arrayStringsAreEqual = function(word1, word2) {
//     return word1.join('')===word2.join('')
// };

// const arrayStringsAreEqual = function(word1, word2) {
//     if (word1.join('')===word2.join('')){
//         return true;
//     } else{
//         return false;
//     }
// };

const arrayStringsAreEqual = (word1, word2) => word1.join('')===word2.join('')? true : false;

console.log(arrayStringsAreEqual(["ac", "b"], ["a", "cb"]))