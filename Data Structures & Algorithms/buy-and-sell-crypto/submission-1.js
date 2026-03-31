class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if(prices === null || prices.length<2){
            return 0;
        }

        let maxProfit = 0;
        let currentBuyingPrice = prices[0];

        for(let i = 1; i<prices.length ; i++){
            if(prices[i]<currentBuyingPrice){
                currentBuyingPrice = prices[i];
            }else{
                let profit = prices[i] - currentBuyingPrice;
                maxProfit = Math.max(maxProfit, profit);
            }
        }
        return maxProfit;

    }
}
