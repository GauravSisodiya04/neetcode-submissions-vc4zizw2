class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {

    // House Robber Space Optimised Version

    // Lets say we are looking at the third house . Lets call the house immediate 
    // previous to this one as prev1 and previous of immediate previous as prev2.

    // In case of three house, house1 will be prev2, house2 will be prev1.

    let prev2 =0; 
    let prev1 = 0;

    for(let everyHouse of nums){
        let temp = prev1;
        prev1 = Math.max(everyHouse+prev2, prev1);// 1
        prev2 = temp;
    }

    return prev1;   
    }
}

