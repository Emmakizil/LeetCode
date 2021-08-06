/* Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
After doing so, return the array.
Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
*/

const replaceElements = function(arr) {
    let max = arr[arr.length-1];
    for(i=arr.length-2; i>=0; i--){
        current = arr[i]
        arr[i] = max;
        if(max>current) max=arr[i];
        else max=current
    };
    arr[arr.length-1]= -1
    return arr
};

console.log(replaceElements([17,18,5,4,6,1]))