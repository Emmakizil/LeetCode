/* 1672. Richest Customer Wealth
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
*/


const maximumWealth = function(accounts) {
    return Math.max(...accounts.map(element => element.reduce((acc, cval) => acc + cval)));
};

console.log(maximumWealth([[1,5],[7,3],[3,5]]))


/*
What did I learn:
    - Spread and rest opertor
    - .map()
    - .reduce()
    - Math.max()
    */