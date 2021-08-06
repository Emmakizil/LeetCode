/*Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).
More formally check if there exists two indices i and j such that :
i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j] */


const checkIfExist = function(arr) {
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < i; j++) {
            if (arr[i] * 2 === arr[j] || arr[i] / 2 === arr[j]){
              return true;  
            } 
        }
    }
    return false;
};

console.log(checkIfExist([3,1,7,11]))

/* what did I learn:
    -search in array
*/
