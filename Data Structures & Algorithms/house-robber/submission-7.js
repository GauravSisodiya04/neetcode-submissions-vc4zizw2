class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        ///. [2] [3] [5] [1] [6]
        if(!nums || nums.length ===0){
            return 0;
        }
        let prev1 = nums[0]; //Immediate previous house
        let prev2 = 0; //Previous to prev1
        for(let i = 1 ; i<=nums.length-1 ;i++){
            let maxMoneyIcanMake = Math.max(prev1, prev2+nums[i]); // 2
            prev2 = prev1; // 1
            prev1 = maxMoneyIcanMake; // 2
        }
        return prev1;
    }
}
