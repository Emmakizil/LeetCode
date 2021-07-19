/* 1528. Shuffle String
Given a string s and an integer array indices of the same length.
The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
Return the shuffled string.*/

var restoreString = function(s, indices) {
    let sIndices = []
        
    for (let i=0; i<indices.length; i++) {
        sIndices[indices[i]] = s[i]
    }
    return sIndices
};

// var restoreString = function(s, indices) {
//     return s.split('').map((index) => s[indices.indexOf(index)]).join('')
// };
console.log(restoreString('herlo', [3,4,1,2,0]))