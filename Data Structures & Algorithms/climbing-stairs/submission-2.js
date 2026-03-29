class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        //we can take either 1 or 2 staircase only
        //eg to reach 3, 1+1+1 , 1+2, 2+1 = 3 ways
        // eg to reach 4, ways to reach 3 + 2+2, 3+1,

        //to climb n stairs, we need to find ways to find n-1 stairs eventually till we get to 1 or 2
        const cache = new Array(n).fill(-1);
        const dfs = (i) => {
                if(i == n) return 1;
                if(i > n) return 0;
                if(cache[i] !== -1) return cache[i];
                let result = dfs(i+1) + dfs(i+2);
                cache[i] = result;
                return result;
        };

        return dfs(0)
    }
}
