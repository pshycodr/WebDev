/* Problem Description:

Say you have an array, A, for which the i^th element is the price of a given stock on day 1.

If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Return the maximum possible profit.

Problem Constraints:
0<= A.size() <= 700000
1 <= A[i] <= 10⁷

Input Format:
The first and the only argument is an array of integers, A.

Output format:
Return an integer, representating the maximum possible profit. */



function maxProfit(prices){
    let minPrice = prices[0]
    let maxProfit = 0

    for (const price of prices) {
        minPrice =  Math.min(minPrice, price)

        maxProfit = Math.max(maxProfit, price - minPrice)
    }

    return maxProfit
}


const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));