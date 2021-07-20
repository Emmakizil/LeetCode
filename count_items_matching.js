/* 1773. Count Items Matching a Rule
You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, 
and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.
The ith item is said to match the rule if one of the following is true:
ruleKey == "type" and ruleValue == typei.
ruleKey == "color" and ruleValue == colori.
ruleKey == "name" and ruleValue == namei.
Return the number of items that match the given rule.*/

const countMatches = function(items, ruleKey, ruleValue) {
    let counter = 0;
    for (i=0; i<items.length; i++){
        if(ruleKey == "color"){
            if (items[i][1]==ruleValue){
                counter++
            } else if(ruleKey== "type"){
                if(items[i][0]==ruleValue){
                    counter++
                } else{
                    counter++
                }
            }
        }
    }
    return counter
};

console.log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], "color", "silver"))