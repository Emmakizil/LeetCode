/* 1684. Count the Number of Consistent Strings
You are given a string allowed consisting of distinct characters and an array of strings words.
A string is consistent if all characters in the string appear in the string allowed.
Return the number of consistent strings in the array words. */


const countConsistentStrings = function(allowed, words) {
   let alloweds = [...allowed]
   let count = words.length;
    for (i = 0; i < words.length; i++){
        for(j = 0; j < words[i].length; j++){
            if(!alloweds.includes(words[i][j])){
                count--;
                break;
            }
        }
    }
    return count;
};

console.log(countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"]))

// "ab"
// {
//     "a" -> 1
//     "b" -> 1
// }
// "ad"
// {
//     "a"-> 1
//     "d"-> 1
// }
// "aaab"
// {
//     "a"-> 3
//     "b" ->1
// }
// if there exist a chatacter in original string in the target string -> continue
// else fail

//console.log(countConsistentStrings( "ab", ["ad","bd","aaab","baa","badab"]))
/* What did I learn:
    The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects. 
*/