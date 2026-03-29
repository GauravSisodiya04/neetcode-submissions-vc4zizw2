class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        //we can take either 1 or 2 staircase only
        //eg to reach 3, 1+1+1 , 1+2, 2+1 = 3 ways
        // eg to reach 4, ways to reach 3 + 2+2, 3+1,
        if(n<=2){
            return n;
        }
        //to climb n stairs, we need to find ways to find n-1 stairs eventually till we get to 1 or 2
        let prev2 = 1;
        let prev1 = 2;

        for(let i =3 ; i<=n ; i++){
            let current = prev2+prev1;
            prev2 = prev1;
            prev1 = current;
        }
        return prev1;
    }
}
