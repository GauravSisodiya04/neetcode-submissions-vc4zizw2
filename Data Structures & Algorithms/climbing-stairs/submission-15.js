class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if(n<3){
            //when n = 1 , there is only one way
            // when n = 2, there are only two ways
            return n;
        }
        //When n grows larger than 2
        let prev1 = 2; //Immediate previous stair , 
        let prev2 = 1 ; // Previous stair to the prev1

        //We know that for any given step n, the number of ways to climbe the stair
        //is  [ways for(n-1)] + [ways for(n-2)]

        for(let i = 3; i<=n ; i++){
            let currentWays = prev1+prev2;
            prev2 = prev1;
            prev1 = currentWays;
        }

        return prev1;
        

    }
}
