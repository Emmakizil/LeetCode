/*Given a fixed length array arr of integers, duplicate each occurrence of zero,
shifting the remaining elements to the right.
Note that elements beyond the length of the original array are not written.
Do the above modifications to the input array in place, do not return anything from your function.*/

const duplicateZeros = function(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 0) {
            for(j = arr.length - 1; j > i; j--) 
               arr[j] = arr[j - 1];
            i++;
        }
    } return arr
}

console.log(duplicateZeros([1,0,3,2,5,0]))