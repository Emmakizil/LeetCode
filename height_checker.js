/* A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.
You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).
Return the number of indices where heights[i] != expected[i].
*/
const heightChecker = function(heights) {
    let expected = heights.map((num) => num).sort((a, b) => a - b);
    count = 0;
    for(i=0; i<heights.length; i++){
        console.log(heights[i]);
        console.log(expected[i])
        if(heights[i]!= expected[i]) count++
    } return count;
};

console.log(heightChecker([1,1,4,2,1,3]))

/* What did I learn:
    -reviewed methods
*/
