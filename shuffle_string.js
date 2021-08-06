/* 1528. Shuffle String
Given a string s and an integer array indices of the same length.
The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
Return the shuffled string.*/

const restoreString = function(s, indices) {
    let indiceOfS = [];
    for(i=0; i<indices.length; i++){
        indiceOfS[indices[i]] = s[i]
    }
    return indiceOfS.join('')
};


// var restoreString = function(s, indices) {
//     return s.split('').map((index) => s[indices.indexOf(index)]).join('')
// };
console.log(restoreString('herlo', [3,4,1,2,0]))

/* What did I learn:
 -reviwed join method
 */