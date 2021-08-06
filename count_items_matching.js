/* 1773. Count Items Matching a Rule
You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, 
and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.
The ith item is said to match the rule if one of the following is true:
ruleKey == "type" and ruleValue == typei.
ruleKey == "color" and ruleValue == colori.
ruleKey == "name" and ruleValue == namei.
Return the number of items that match the given rule.*/

// var countMatches = function(items, ruleKey, ruleValue) {
//     let total = 0;
    
//     for (let i = 0; i < items.length; i++) {
//         if (ruleKey === "type" && items[i][0] === ruleValue) {
//             total += 1;
//         }
//         if (ruleKey === "color" && items[i][1] === ruleValue) {
//             total += 1;
//         }
//         if (ruleKey === "name" && items[i][2] === ruleValue) {
//             total += 1;
//         }
//     }
//     return total;          
// };
const countMatches = function(items, ruleKey, ruleValue) {
    let counter = 0;
    for(let i = 0; i < items.length; ++i) {
        if(ruleKey === 'type') {
            if(ruleValue === items[i][0]) counter++;
        }
        else if(ruleKey === 'color') {
            if(ruleValue === items[i][1]) counter++;
        }
        else if(ruleKey === 'name') {
            if(ruleValue === items[i][2]) counter++;
        }
    } return counter;
};

console.log(countMatches([["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]],"type", "phone"))

/* What did I learn:
 -
 */