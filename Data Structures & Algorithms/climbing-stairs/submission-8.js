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
        if(n<=2)return n;

        let dp = new Array(n+1);

        let first = 1 // number of ways to get to stair 1
        let second = 2 // number of ways to get to stair 2
        for(let i =3 ; i<=n ; i++){
            let current = first + second;
            first = second;
            second = current;
        }

        return second;

    }
}
