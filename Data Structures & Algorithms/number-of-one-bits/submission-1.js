class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let result = 0;
        while(n){
            n = (n & (n - 1) );
            result = result + 1;   
        }
        return result;
    }
}
