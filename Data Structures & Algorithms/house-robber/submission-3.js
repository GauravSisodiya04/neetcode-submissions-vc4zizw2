class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        // [0].  [1].  [2].  [3].   [4]
        
        if(!nums || nums.length === 0){
            return 0;
        }

        if(nums.length === 1){
            return nums[0];
        }

        let prev1 =0 ; // n-1. If you are at 3rd house, this points to second house
        let prev2 = 0; // n-2 This points to 1st house 

        for(let i = 0; i<nums.length ; i++){
            let maxMoneyIcanMakeAtThisHouse = Math.max(prev1, nums[i] +prev2);
            prev2 = prev1
            prev1 = maxMoneyIcanMakeAtThisHouse;
        }
        return prev1;
    }
}
