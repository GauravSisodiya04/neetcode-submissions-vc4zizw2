class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let result = new Array(n+1).fill(0);

        for(let i = 1 ; i<=n ; i++){

            let currentNumber= i;
            while(currentNumber != 0){
               currentNumber = currentNumber & (currentNumber-1);
                ++result[i];
            }
           
        }
        return result;
    }
}
