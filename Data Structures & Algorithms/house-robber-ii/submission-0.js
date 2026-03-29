class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        // We need to break the circle
        // We make a choice, either rob first house or skip it
        // We write a common function which accepts a range to rob houses
        // Then we return the best among two choices
        // We do two passes of O(n) each to determine the maximum profit

        if(!nums) return 0;

        if(nums.length===0) return 0;
        if(nums.length === 1) return nums[0] ; // confirm with interviewer that this is not circle

        function robInRange(start, end){

            let prev1 =0;
            let prev2 =0;

            for(let i=start; i<=end; i++){
                let currentHouse = Math.max(prev1, nums[i]+prev2);
                prev2 = prev1;
                prev1 = currentHouse;
               
            }
            return prev1;

        }

        //case 1- rob first house
        let firstHouseRobbed = robInRange(0, nums.length-2);
        let firstHouseSkipped = robInRange(1, nums.length-1);

        return Math.max(firstHouseRobbed,firstHouseSkipped);

    }
}
