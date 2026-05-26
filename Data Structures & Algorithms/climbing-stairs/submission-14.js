class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        //What we know so far
        // We have to look back
        // To be at n , we must have either come from n-1 or n-2 because we can only 
        // take 1 or 2 steps at a time
    
        let prev2 =1; // Number of steps/ways needed to reach step1 (1 ways)
        let prev1 = 2; // Number of steps/ways needed to reach step2 (1+1 or 2 , so two ways)

        if(n<3){
            return n;
        }

        for(let i= 3;i<=n;i++){
            let current = prev1+prev2;
            prev2 = prev1;
            prev1 = current;
        }

        return prev1;
    
    }
}
